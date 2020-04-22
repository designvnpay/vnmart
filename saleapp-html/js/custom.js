Highcharts.wrap(Highcharts.Axis.prototype, 'getLinePath', function(p, lineWidth) {
    var linePath = p.call(this, lineWidth);

    if (this.options.arrowOnEnd) {
        var arrowFactor = 10,
            x,
            y,
            arrowPath,
            newPath;

        if (this.horiz) {
            x = linePath[4] = linePath[4];
            y = linePath[5];

            arrowPath = [
                'L', x - 0.35 * arrowFactor, y - 0.35 * arrowFactor,
                'L', x - 0 * arrowFactor, y,
                'L', x - 0.35 * arrowFactor, y + 0.35 * arrowFactor,
                'L', x, y
            ];
            newPath = linePath.concat(arrowPath);
        } else {
            x = linePath[1];
            y = linePath[2] = linePath[2] - arrowFactor; // + arrowFactor;

            arrowPath = [
                'M', x, y,
                'L', x - 0.35 * arrowFactor, y + 0.35 * arrowFactor,
                'L', x, y - 0 * arrowFactor,
                'L', x + 0.35 * arrowFactor, y + 0.35 * arrowFactor,
                'L', x, y
            ];

            newPath = arrowPath.concat(linePath);
        }

        return newPath;
    }

    return linePath;
});

(function(H) {
    var each = H.each;
    H.wrap(H.seriesTypes.column.prototype, 'drawPoints', function(proceed) {
        var series = this;
        if (series.data.length > 0) {
            var width = series.barW > series.options.maxPointWidth ? series.options.maxPointWidth : series.barW;
            each(this.data, function(point) {
                point.shapeArgs.x += (point.shapeArgs.width - width) / 2;
                point.shapeArgs.width = width;
            });
        }
        proceed.call(this);
    })


})(Highcharts)
var getRandomData = function(size, addition) {
    if (!addition) addition = 5;
    var data = [];
    var len = Math.random() * size + addition;
    var i;
    for (i = 0; i < len; i++) {
        data.push(Math.random() * 50);
    }
    return data;
};
var tooltipTilte1 = "Số lượng chi nhánh: ";
var tooltipTilte2 = "KPI bình quân: ";
var tooltipTilte3 = "KPI chi nhánh: ";
var legendDistant = screen.width > 768 ? 50 : 10;
var legendPadding = legendDistant / 4;
$(document).ready(function() {
    $('.select2').select2({
        width: '100%',
    });
    // $('.product-detail__related__img-text p').truncate({
    //     lines: 2
    // });
    // $('.slide_lever3 .image-title').truncate({
    //     lines: 2
    // });
    $('.kpi__dropdown__input').select2({
        width: '100%',
        dropdownCssClass: "kpi__dropdown__container"
    });
    setTimeout(function() {
        $('.product-detail__related__img-text p').ellipsis({
            lines: 2,
            responsive: true,
        });
        $('.slide_lever3 .image-title>strong').ellipsis({
            lines: 2,
            responsive: true,
        });
        $('.slide_lever2 .image-title>strong').ellipsis({
            lines: 2,
            responsive: true,
        });
        $('.slide_lever1 .image-title>strong').ellipsis({
            lines: 2,
            responsive: true,
        });
        $('.slide_other .image-title>strong').ellipsis({
            lines: 2,
            responsive: true,
        });
        $('.modal .image-title>strong').ellipsis({
            lines: 2,
            responsive: true,
        });
        owl1.trigger('refresh.owl.carousel');
        owl2.trigger('refresh.owl.carousel');
        owl3.trigger('refresh.owl.carousel');
        owl4.trigger('refresh.owl.carousel');

    }, 10);
    $(".modal").on('shown.bs.modal', function() {
        $('.modal .image-title>strong').ellipsis({
            lines: 2,
            responsive: true,
        });
        $('.title_other').css('height', $('.slide_other .owl-item').height());
        console.log('adfasd');
        setTimeout(function() {
            $('.title_other').css('height', $('.slide_other').height());
            $('.slide_other .image-title>strong').ellipsis({
                lines: 2,
                responsive: true,
            });
        }, 10);
    });

    function tabLine() {
        $('.product-tab__name').prepend('<div class="product-tab__name__line" style="width:' + $('.dragscroll').width() + 'px"></div>');
        $('.title_other').css('height', $('.slide_other .owl-item').height());
        $(".kpi__graph").each(function() {
            $(this).css('height', $('.kpi-wrap').height() - parseInt($('.kpi__tab__content').css('padding-bottom')) * 1.2 - $('.product-tab__wrap').height() - ($(this).prev('.kpi__top')).innerHeight());
        });
    };

    function tabLineResize() {

        $('.product-tab__name__line').width($('.dragscroll').width());
        owl1.trigger('refresh.owl.carousel');
        owl2.trigger('refresh.owl.carousel');
        owl3.trigger('refresh.owl.carousel');
        owl4.trigger('refresh.owl.carousel');
        if ($(window).width() > 768) {
            if (($(window).width() / $(window).height() < 1.777) && ($(window).width() > 1024)) {
                $('.slide_lever1').css('height', 600 - $('.column-4').height() - parseInt($('.column-1 .column-cont').css("padding-top")) * 3);
                $('.slide_lever2 .scroll-pane').css('height', 600 - $('.readmore').outerHeight() - parseInt($('.readmore').css("margin-top")) - parseInt($('.column-1 .column-cont').css("padding-top")) * 2);
            } else {
                $('.slide_lever1').css('height', $('#main-nano-wrapper').height() - $('.column-4').height() - parseInt($('.column-1 .column-cont').css("padding-top")) * 3);
                $('.slide_lever2 .scroll-pane').css('height', $('.column-2 .column-cont').height() - $('.readmore').outerHeight() - parseInt($('.readmore').css("margin-top")));
            }
        } else {
            $('.slide_lever1').css('height', '');
            $('.slide_lever2 .scroll-pane').css('height', '');
        };

    };
    tabLine();
    window.addEventListener('resize', function(event) {
        setTimeout(function() {
            tabLineResize();
        }, 100);
    });


    function getScrollBarWidth() {
        var $outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
            widthWithScroll = $('<div>').css({ width: '100%' }).appendTo($outer).outerWidth();
        $outer.remove();
        return 100 - widthWithScroll;
    };
    var owl = $('#slide_login');
    owl.owlCarousel({
        margin: 0,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplay: false,
    });
    var owl1 = $('#slide_lever1');
    owl1.owlCarousel({
        margin: 15,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
    });
    var owl3 = $('#slide_lever3');
    owl3.owlCarousel({
        margin: screen.width > 1600 ? 30 : 15,
        loop: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        nav: true,
        navText: ["", ""],
        autoPlay: false,
    });
    var owl2 = $('#slide_other');
    owl2.owlCarousel({
        margin: screen.width > 1600 ? 30 : 15,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 5
            }
        },
        nav: true,
        navText: ["", ""],
        autoPlay: false,
    });
    var owl4 = $('.owl--detail-related');
    owl4.owlCarousel({
        margin: 15,
        nav: true,
        navContainer: '.slider-nav',
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },

            1600: {
                margin: 30,
                items: 5
            }
        }
    });

    if ($(window).width() > 768) {
        if ((($(window).width() / $(window).height() < 1.777) && ($(window).width() > 1024)) || ($(window).width() / $(window).height() < 1.3)) {
            console.log('<1.8');
            $('.slide_lever1').css('height', 600 - $('.column-4').height() - parseInt($('.column-1 .column-cont').css("padding-top")) * 3);
            $('.slide_lever2 .scroll-pane').css('height', 600 - $('.readmore').outerHeight() - parseInt($('.readmore').css("margin-top")) - parseInt($('.column-1 .column-cont').css("padding-top")) * 2);
        } else {
            $('.slide_lever1').css('height', $('#main-nano-wrapper').height() - $('.column-4').height() - parseInt($('.column-1 .column-cont').css("padding-top")) * 3);
            $('.slide_lever2 .scroll-pane').css('height', $('.column-2 .column-cont').height() - $('.readmore').outerHeight() - parseInt($('.readmore').css("margin-top")));
        }
    } else {
        $('.slide_lever1').css('height', '');
        $('.slide_lever2 .scroll-pane').css('height', '');
    };
    if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || ($(window).width() < 1025)) {
        $('.nano').addClass('nano-touch');
        $('.nano').addClass('has-scrollbar')
    } else {
        $('.nano').nanoScroller({});
    };

    if ($('#graph1').length) {
        var chart = new Highcharts.chart('graph1', {
            chart: {
                type: 'line',
                backgroundColor: '#f2f2f2',
                spacingLeft: 30,
                spacingRight: 30,
                style: {
                    fontFamily: 'Kuro',
                    fontSize: ""
                }
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Biểu đồ tổng điểm KPI',
                margin: 60,
                y: 30,
                style: {
                    fontWeight: "bold",
                    fontSize: "1.6em",
                    marginBottom: "2em"
                }
            },
            subtitle: {
                // text: 'Test options by dragging the sliders below'
            },
            plotOptions: {},
            legend: {
                symbolWidth: legendDistant,
                padding: legendPadding,
                itemDistance: legendDistant,
                itemStyle: {
                    fontSize: "1.1em",
                    fontWeight: "500"
                },
            },
            series: [{
                    name: "Điểm mục tiêu",
                    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
                    maxPointWidth: 50,
                    color: '#8CC540',
                    borderWidth: 0,
                    lineWidth: 2,
                    dotThickness: 4,
                    animation: false,
                    shadow: {
                        offsetX: 1,
                        offsetY: 1,
                        opacity: 0.02,
                        color: '#000000',
                        width: 6,
                    },
                    marker: {
                        fillColor: '#f2f2f2',
                        lineWidth: 2,
                        lineColor: null // inherit from series
                    }
                },
                {
                    name: "Điểm thực tế",
                    data: [5, 40, 10, 34, 80, 100, 20, 33],
                    maxPointWidth: 50,
                    color: '#FF7800',
                    borderWidth: 0,
                    lineWidth: 2,
                    animation: false,
                    shadow: {
                        offsetX: 1,
                        offsetY: 1,
                        opacity: 0.02,
                        color: '#000000',
                        width: 6,
                    },
                    marker: {
                        fillColor: '#f2f2f2',
                        lineWidth: 2,
                        lineColor: null,
                        symbol: 'circle'
                    },
                    dataLabels: {
                        enabled: true,
                        shape: 'callout',
                        y: -10,
                        borderRadius: 7,
                        shadow: {
                            offsetX: 1,
                            offsetY: 1,
                            opacity: 0.02,
                            color: '#000000',
                            width: 6,
                        },
                        backgroundColor: '#ffffff',
                        padding: screen.width > 768 ? 8 : 4,
                        style: {
                            color: '#31AE27',
                            textOutline: 'none',
                            fontSize: '1.2em',

                        }
                    },
                }
            ],
            tooltip: {
                useHTML: true,
                borderRadius: 10,
                backgroundColor: '#ffffff',
                style: {
                    fontSize: '16px'
                },
                shadow: {
                    offsetX: 1,
                    offsetY: 1,
                    opacity: 0.02,
                    color: '#000000',
                    width: 6,
                },
                formatter: function() {
                    var s = '<div class = "hctooltip hctooltip--title">' + this.x + '</div><table class="highcharts-label__table">';
                    var s2 = '</table>'

                    $.each(this.points, function() {
                        s += '<tr><td>' + this.series.name + '</td><td>' + this.y + '</td></tr>';
                    });

                    return s + '</table>';
                },
                shape: "callout",
                className: "ad",
                shared: true,
                borderWidth: 0,
            },
            xAxis: {
                type: 'category',
                categories: ['01/2017', '02/2017', '03/2017', '04/2017', '05/2017', '06/2017', '07/2017', '08/2017', '09/2017', '10/2017', '11/2017', '12/2017'],
                title: {
                    align: 'high',
                    text: 'Tháng',
                    textAlign: 'right',
                    style: {
                        fontSize: '1.2em',
                        color: '#31AE27'
                    }
                },
                crosshair: {
                    width: 1,
                    color: '#ffffff',
                    dashStyle: 'shortdot',
                    zIndex: 5
                },
                tickWidth: 0,
                labels: {
                    style: {
                        fontSize: '1.2em'
                    }
                },
                lineColor: "#bebebe",
                arrowOnEnd: true,
            },
            yAxis: {
                title: {
                    align: 'high',
                    text: 'Điểm',
                    name: "Điểm",
                    rotation: '0',
                    y: -30,
                    x: 0,
                    offset: 0,
                    textAlign: 'right',
                    style: {
                        fontSize: '1.2em',
                        color: '#31AE27'
                    }
                },
                labels: {
                    step: 2,
                    style: {
                        fontSize: '1.2em',
                    }
                },
                lineColor: "#bebebe",
                lineWidth: 1,
                tickWidth: 1,
                arrowOnEnd: true,
            },
        });
        var chart = new Highcharts.chart('graph2', {
            chart: {
                type: 'column',
                backgroundColor: '#f2f2f2',
                spacingLeft: 30,
                spacingRight: 30,
                style: {
                    fontFamily: 'Kuro',
                    fontSize: "",
                }
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Biểu đồ so sánh chỉ tiêu Huy động bình quân trực tiếp',
                margin: 60,
                y: 30,
                style: {
                    fontWeight: "bold",
                    fontSize: "1.6em",
                    marginBottom: "2em"
                }
            },
            subtitle: {
                // text: 'Test options by dragging the sliders below'
            },
            plotOptions: {
                column: {
                    depth: 25,
                    dataLabels: {
                        enabled: true,
                        shape: 'callout',
                        y: -10,
                        borderRadius: 7,
                        shadow: {
                            offsetX: 1,
                            offsetY: 1,
                            opacity: 0.02,
                            color: '#000000',
                            width: 6,
                        },
                        backgroundColor: '#ffffff',
                        padding: screen.width > 768 ? 8 : 4,
                        style: {
                            color: '#31AE27',
                            textOutline: 'none',
                            fontSize: '1.2em',

                        }
                    },
                }
            },

            series: [{
                data: [{
                        name: 'Top 1',
                        y: 160,
                        number: "20",
                        average: "167",
                        branch: "357"
                    },
                    {
                        name: 'Top 2',
                        y: 157,
                        number: "1",
                        average: "126",
                        branch: "383"
                    },
                    {
                        name: 'Top 3',
                        y: 132,
                        number: "2",
                        average: "245",
                        branch: "387"
                    },
                    {
                        name: 'Top 4',
                        y: 100,
                        number: "3",
                        average: "158",
                        branch: "212"
                    },
                    {
                        name: 'Top 5',
                        y: 119,
                        number: "4",
                        average: "103",
                        branch: "299"
                    },
                    {
                        name: 'Top 6',
                        y: 118,
                        number: "5",
                        average: "206",
                        branch: "205"
                    },
                    {
                        name: 'Top 7',
                        y: 100,
                        number: "6",
                        average: "120",
                        branch: "371"
                    },
                    {
                        name: 'Top 8',
                        y: 40,
                        number: "7",
                        average: "114",
                        branch: "206"
                    },
                    {
                        name: 'Top 9',
                        y: 30,
                        number: "8",
                        average: "217",
                        branch: "378"
                    }
                ],
                maxPointWidth: 50,
                animation: false,
                color: '#8CC540',
                borderWidth: 0,
                showInLegend: false,
                shadow: {
                    offsetX: 1,
                    offsetY: 1,
                    opacity: 0.02,
                    color: '#000000',
                    width: 6,
                }
            }],
            tooltip: {
                useHTML: true,
                borderRadius: 10,
                backgroundColor: '#ffffff',
                shadow: {
                    offsetX: 1,
                    offsetY: 1,
                    opacity: 0.02,
                    color: '#000000',
                    width: 6,
                },
                borderWidth: 0,
                formatter: function() {
                    return '<table class="hctooltip hctooltip--compare"><tr><td>' + tooltipTilte1 + '</td><td>' + this.point.number + '</td></tr><tr><td>' + tooltipTilte2 + '</td><td><div class="color__green">' + this.point.average + '</div></td></tr><tr><td><div class="color__red">' + tooltipTilte3 + '</div></td><td><div class="color__red">' + this.point.branch + '</div></td></tr></table>';
                }
            },
            xAxis: {
                type: 'category',
                title: {
                    align: 'high',
                    text: 'Nhóm',
                    textAlign: 'right',
                    style: {
                        fontSize: '1.2em',
                        color: '#31AE27'
                    }
                },
                crosshair: {
                    width: 1,
                    color: '#ffffff',
                    dashStyle: 'shortdot',
                    zIndex: 5
                },
                tickWidth: 0,
                labels: {
                    style: {
                        fontSize: '1.2em'
                    }
                },
                lineColor: "#bebebe",

            },
            yAxis: {
                title: {
                    align: 'high',
                    text: 'Tỷ Đồng',
                    rotation: '0',
                    y: -30,
                    x: 0,
                    offset: 0,
                    textAlign: 'right',
                    style: {
                        fontSize: '1.2em',
                        color: '#31AE27'
                    }
                },
                labels: {
                    step: 1,
                    style: {
                        fontSize: '1.2em',
                    }
                },
                lineColor: "#bebebe",
                lineWidth: 1,
                tickWidth: 1,
                arrowOnEnd: true,
            },
        });
        $(document).on('shown.bs.tab', 'div[data-toggle="tab"]', function(e) {

            $(".kpi__graph").each(function() {
                $(this).css('height', $('.kpi-wrap').height() - parseInt($('.kpi__tab__content').css('padding-bottom')) * 1.2 - $('.product-tab__wrap').height() - ($(this).prev('.kpi__top')).innerHeight());
            });
            $('#graph2').highcharts().reflow();
            $('#graph1').highcharts().reflow();
        });
    };
    $('[data-tooltip="tooltip"]').tooltip();
    $('.datepicker').datetimepicker({
        format: "DD/MM/YYYY",
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'bottom'
        }
    });
    $('.datepicker-time').datetimepicker({
        format: "LT",
        sideBySide: true,
    });
    var accentMap = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };
    var normalize = function(term) {
        var ret = "";
        for (var i = 0; i < term.length; i++) {
            ret += accentMap[term.charAt(i)] || term.charAt(i);
        }
        return ret;
    };
    var availableTags = [{
            value: "Vay Tiêu dùng ưu đãi",
            sub: "Chiến dịch"
        },
        {
            value: "Novella Slinsky",
            sub: "Chiến dịch"
        },
        {
            value: "Twanda Curll",
            sub: "Chiến dịch"
        },
        {
            value: "Maxie Herard",
            sub: "Chiến dịch"
        },
        {
            value: "Lean Lade",
            sub: "Chiến dịch"
        },
        {
            value: "Terrie Emison",
            sub: "Chiến dịch"
        },
        {
            value: "Lanora Yandow",
            sub: "Chiến dịch"
        },
        {
            value: "Ezequiel Vaci",
            sub: "Chiến dịch"
        },
        {
            value: "Branden Xayasith",
            sub: "Chiến dịch"
        },
        {
            value: "Casey Lograsso",
            sub: "Chiến dịch"
        },
        {
            value: "Bruce Mollette",
            sub: "Chiến dịch"
        },
        {
            value: "Maude Conlin",
            sub: "Chiến dịch"
        },
        {
            value: "Hannelore Rook",
            sub: "Chiến dịch"
        },
        {
            value: "Evelina Panone",
            sub: "Chiến dịch"
        },
        {
            value: "Louise Mcgafferty",
            sub: "Chiến dịch"
        }
    ];
    if ($('.autocomplete').length) {
        $(".autocomplete").autocomplete({
            source: function(request, response) {
                var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                response($.grep(availableTags, function(value) {
                    value = value.label || value.value || value;
                    return matcher.test(value) || matcher.test(normalize(value));
                }));
            },
            open: function() {
                $(".ui-autocomplete:visible").css({ top: "+=10" });
            },
            minLength: 0,
            focus: function(event, ui) {
                $(".autocomplete").val(ui.item.value);
                return false;
            },
            select: function(event, ui) {
                $(".autocomplete").val(ui.item.value);
                return false;
            }
        }).data("ui-autocomplete")._renderItem = function(ul, item) {
            return $("<li>")
                .data("item.autocomplete", item)
                .append("<div class='autocomplete__wrap'><div class='autocomplete__value'>" + item.value + "</div><div class='autocomplete__sub'>" + item.sub + "</div></div>")
                .appendTo(ul);
        };
    };
    String.prototype.latinise = function() { return this.replace(/[^A-Za-z0-9\[\] ]/g, function(a) { return accentMap[a] || a }) };
    $('.live-search-list li').each(function() {
        $(this).attr('data-search-term', $(this).text().toLowerCase().latinise());
    });

    $('.live-search-box').on('keyup', function() {

        var searchTerm = $(this).val().toLowerCase().latinise();

        $('.live-search-list li').each(function() {

            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });

    });
});

$(window).on('load', function() {
    $(".loading").fadeOut("slow", function() {});
});