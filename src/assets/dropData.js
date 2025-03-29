const dropData = [{
        parent_id: 0,
        items: [{
                id: 0,
                title: 'محصولات اداری',
                subItem: [{
                    title: 'سربرگ و یادداشت',
                    link: '/header'
                }, {
                    title: 'پاکت',
                    link: '/envelope'
                }, {
                    title: 'لیبل',
                    link: '/label'
                }, {
                    title: 'تراکت',
                    link: '/flyer'
                }, {
                    title: 'بروشور',
                    link: '/pamphlet'
                }, {
                    title: 'کارت ویزیت',
                    link: '/business-card'
                }, {
                    title: 'فاکتور فروش',
                    link: '/invoice'
                }]
            },
            {
                id: 1,
                title: 'محصولات تبلیغاتی',
                subItem: [{
                    title: 'فولدر تبلیغاتی',
                    link: '/advertising-folder'
                }, {
                    title: 'پوشه کاغذی',
                    link: '/paper-folder'
                }, {
                    title: 'کاتالوگ',
                    link: '/catalog'
                }, {
                    title: 'مجله تبلیغاتی',
                    link: '/advertising-magazine'
                }, {
                    title: 'پوستر',
                    link: '/poster'
                }, {
                    title: 'لیبل و پاکت سی دی',
                    link: '/cd-label'
                }, {
                    title: 'لیوان کاغذی و هولدر لیوان',
                    link: '/paper-cup'
                }]
            },
            {
                id: 2,
                title: 'محصولات فروشگاهی',
                subItem: [{
                    title: 'کاغذکادو اختصاصی',
                    link: '/exclusive-gift-paper'
                }, {
                    title: 'پاکت پستی حبابدار',
                    link: '/bubble-envelope'
                }, {
                    title: 'پاکت پستی محرمانه (لمینه)',
                    link: '/confidential-postal-envelope'
                }, {
                    title: 'جعبه کیبوردی اختصاصی',
                    link: '/dedicated-keyboard-box'
                }, {
                    title: 'اتیکت و تگ آویز',
                    link: '/hanging-tags'
                }, {
                    title: 'روبان تبلیغاتی',
                    link: '/promotional-ribbon'
                }]
            },
            {
                id: 3,
                title: 'هدایای نوروزی 1404',
                subItem: [{
                    title: 'سالنامه اختصاصی 1404',
                    link: '/special-1404-yearbook'
                }, {
                    title: 'تقویم دیواری',
                    link: '/wall-calendar'
                }, {
                    title: 'تقویم دیواری تک برگ',
                    link: '/single-sheet-wall-calendar'
                }, {
                    title: 'تقویم رومیزی اختصاصی4 برگ',
                    link: '/dedicated-4-sheet-desktop-calendar'
                }]
            },
            {
                id: 4,
                title: 'محصولات پزشکی',
                subItem: [{
                    title: 'پاکت رادیولوژی و MRI',
                    link: '/radiology-envelope-and-mri'
                }, {
                    title: 'پاکت سی دی جواب آزمایش',
                    link: '/test-answer-cd-envelope'
                }, {
                    title: 'پاکت آزمایشگاه',
                    link: '/lab-envelope'
                }, {
                    title: 'کاردکس و پرونده بیمار',
                    link: '/cardex-and-patient-file'
                }, {
                    title: 'کارت نوبت بیمار',
                    link: '/patient-appointment-card'
                }, {
                    title: 'سرنسخه',
                    link: '/headline'
                }]
            },
            {
                id: 5,
                title: 'سایر',
                subItem: [{
                    title: 'بسته بندی انواع جعبه',
                    link: '/box-packing'
                }, {
                    title: 'کاغذ کف پایی کارواش',
                    link: '/carwash-sole-paper'
                }]
            },
        ]
    },
    {
        parent_id: 2,
        items: [{
            id: 0,
            title: "",
            subItem: [{
                title: 'تعرفه طراحی',
                link: '/design-price'
            }, {
                title: 'طرح های آماده',
                link: '/ready-designs'
            }, {
                title: 'ثبت سفارش طراحی',
                link: '/design-order-registration'
            }]
        }]
    },
    {
        parent_id: 3,
        items: [{
            id: 0,
            title: "",
            subItem: [{
                title: 'درخواست ارسال سفارش در تهران',
                link: '/tehran-orders'
            }, {
                title: 'درخواست ارسال سفارش به شهرستان',
                link: '/other-city-orders'
            }]
        }]
    }
]

export default dropData