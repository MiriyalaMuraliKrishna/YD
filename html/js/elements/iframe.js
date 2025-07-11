import $ from 'jquery';
export let iframe = {
  init() {
    const playBtn = $('.play-inline-video');
    if (!playBtn) return;
    playBtn.each(function () {
      const _selfbtn = $(this);

      _selfbtn.on('click', function (e) {
        e.preventDefault();

        $(this).parent().closest('.inline-video-main').addClass('open-iframe');
        const iframe = $(this)
          .parent()
          .closest('.inline-video-main')
          .children('iframe')[0];

        if (iframe && iframe.src.includes('vimeo')) {
          const player = new Vimeo.Player(iframe);
          let count = 0;

          player
            .play()
            .then(function () {
              player.getDuration().then(function (duration) {
                player.on('timeupdate', function (data) {
                  count = Math.floor(data.seconds);
                  if (count === Math.floor(duration)) {
                    player.off('timeupdate');

                    $('.inline-video-main').removeClass('open-iframe');
                  }
                });
              });
            })
            .catch(function (error) {
              console.error('Error playing Vimeo video:', error);
            });
        } else if (iframe && iframe.src.includes('youtube')) {
          const videoId = getYouTubeVideoId(iframe.src);
          const player = new YT.Player(iframe, {
            videoId: videoId,
            playerVars: {
              autoplay: 1,
              mute: 0,
              showinfo: 0,
              rel: 0,
            },
            events: {
              onReady: function (event) {
                event.target.unMute();
                event.target.playVideo();
              },
              onStateChange: function (event) {
                if (event.data === YT.PlayerState.ENDED) {
                  $('.inline-video-main').removeClass('open-iframe');
                }
              },
            },
          });

          _selfbtn.on('click', function () {
            if (player.seekTo) {
              player.seekTo(0);
            } else if (player.seek) {
              player.seek(0);
            }
          });
        }
      });
    });

    function getYouTubeVideoId(url) {
      const match = url.match(/[?&]v=([^&]+)/);
      return match ? match[1] : null;
    }

    // const myiframe = document.querySelector('iframe');

    // const src = myiframe.getAttribute('src');
    // if (src && src.indexOf('vimeo.com') !== -1) {
    //   const separator = src.includes('?') ? '&' : '?';
    //   myiframe.src = src + separator + 'title=0&byline=0&portrait=0';
    // }
  },
};
