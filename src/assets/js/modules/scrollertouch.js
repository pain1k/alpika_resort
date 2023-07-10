$(function () {
        const $touchScroller = $('.toucheable');
        $touchScroller.animate({
            scrollTop:$touchScroller.height()
        },500)
        if ($touchScroller.length) {

            $touchScroller.on('mousedown', function (e) {
                const $t = $(this);
                const startX = $t.scrollLeft() + e.pageX;
                const startY = $t.scrollTop() + e.pageY;

                $touchScroller.on('mousemove', function (e) {

                    $t.scrollLeft(startX - e.pageX)
                    $t.scrollTop(startY - e.pageY)
                   
                });
            });

            $touchScroller.on('mouseup', function (e) {
                const $t = $(this);

                $touchScroller.off("mousemove");

            });

            $touchScroller.on('mouseleave', function () {
                $touchScroller.mouseup();
            })
        }
    })