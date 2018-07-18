        var audio = document.getElementsByTagName('video')[0];


        $('.muted').click(function() {
            audio.muted = !audio.muted;
            return false;
        });

        //VOLUME BAR
        //volume bar event
        var volumeDrag = false;
        $('.volume').on('mousedown', function(e) {
            volumeDrag = true;
            audio.muted = false;
            $('.sound').removeClass('muted');
            updateVolume(e.pageX);
        });
        $(document).on('mouseup', function(e) {
            if (volumeDrag) {
                volumeDrag = false;
                updateVolume(e.pageX);
            }
        });
        $(document).on('mousemove', function(e) {
            if (volumeDrag) {
                updateVolume(e.pageX);
            }
        });
        var updateVolume = function(x, vol) {
            var volume = $('.volume');
            var percentage;
            //if only volume have specificed
            //then direct update volume
            if (vol) {
                percentage = vol * 100;
            } else {
                var position = x - volume.offset().left;
                percentage = 100 * position / volume.width();
            }

            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }

            //update volume bar and video volume
            $('.volumeBar').css('width', percentage + '%');
            audio.volume = percentage / 100;

            //change sound icon based on volume
            if (audio.volume == 0) {
                $('.sound').removeClass('sound2').addClass('muted');
            } else if (audio.volume > 0.3) {
                $('.sound').removeClass('muted').addClass('sound2');
            } else {
                $('.sound').removeClass('muted').removeClass('sound2');
            }

        };