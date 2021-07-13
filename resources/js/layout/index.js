$(document).ready(function () {
    //todo change background color of menu-item
    $(".menu-item>a").click(function (e) {
        $(".active").removeClass("active");
        $(this).parent(".menu-item").addClass("active");
    });

    //todo click show/hide row3-item
    $(".bt-floor>button").click(function (e) {
        let id = parseInt($(this).attr("id") - 1);
        $(".row3-item").addClass("dn");
        $(".row3-item").eq(id).removeClass("dn");
    });
    //todo show/hide pop-up book room
    $(".bt-book-room").click(function (e) {
        let maphong = $(this)
            .parent(".box-button")
            .siblings(".box-content")
            .find(".mp")
            .text();
        $('.maphong').attr("value", maphong);
        $(".pop-up h1").text("Nhận phòng - " + maphong);
        $("section.pop-up").removeClass("dn");
    });
    $(".close").click(function (e) {
        $("section.pop-up").addClass("dn");
    });
    //todo show/hide chart
    $(".nav>button").click(function (e) {
        var id = $(this).attr("id");

        if (id == "room") {
            $(".btn-color").removeClass("btn-color");
            $(this).addClass("btn-color");
            $(".barChart").removeClass("dn");
            $(".lineChart").addClass("dn");
        } else {
            $(".btn-color").removeClass("btn-color");
            $(this).addClass("btn-color");
            $(".barChart").addClass("dn");
            $(".lineChart").removeClass("dn");
        }
    });
    //todo show/hide pop-up-pay
    $(".checkout-room").click(function (e) {
        let maphong = $(this)
            .parent(".box-button")
            .siblings(".box-content")
            .find(".mp")
            .text();
        $(".pop-up-pay h1").text("Thanh toán phòng - " + maphong);
        $.get("http://localhost/CNPM/public/thanhtoan/"+maphong,
            function (data, textStatus, jqXHR) {
                $('.traphong').empty();
                $('.traphong').html(data);
                $(".pop-up-pay").removeClass("dn");
                $(".close-pay").click(function (e) {
                    $(".pop-up-pay").addClass("dn");
                });
            },
            "html"
        );
    });
});
$(document).ready(function () {
    for (let index = 0; index < 25; index++) {
        var status = $(".room-status").eq(index).text();
        $(".box-icon").eq(index).addClass(status);
        if (status == "full") {
            $(".box-button>.checkout-room").eq(index).removeClass("dn");
            $(".box-button>.bt-book-room").eq(index).addClass("dn");
        } else {
            $(".box-button>.checkout-room").eq(index).addClass("dn");
            $(".box-button>.bt-book-room").eq(index).removeClass("dn");
        }
    }
});
$(document).ready(function () {
    $(".box-icon").click(function (e) {
        e.preventDefault();
        let maphong = $(this).parent().find(".mp").text();
        $.get(
            "http://localhost/CNPM/public/chitietPT/" + maphong,
            function (data, textStatus, jqXHR) {
                $(".chitietPT").empty();
                $(".chitietPT").html(data);
                //todo show/hide pop-up-info
                $("section.pop-up-info").removeClass("dn");
                $(".pop-up-info .close").click(function (e) {
                    $("section.pop-up-info").addClass("dn");
                });
            },
            "html"
        );
    });
});
$(document).ready(function () {
    let chucvu=$(".us-name p:eq(1)").text();
    if (chucvu!="Quản lý") {
        $("li.menu-item:eq(2)").addClass("dn");
        $("li.menu-item:eq(3)").addClass("dn");
        $("li.menu-item:eq(5)").addClass("dn");
        $(".add-del").addClass("dn");
        $(".edit-service").addClass("dn");
    } 
});