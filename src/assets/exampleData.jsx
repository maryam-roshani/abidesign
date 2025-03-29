import image1 from '../assets/background.jpg'

const t1 = 'چاپ کارت ویزیت '
const chapList = ['چاپ تمام رنگی', 'چاپ تمام رنگی در سایزهای متنوع', 'چاپ تمام رنگی در تعداد کم', 'چاپ رنگی، تکرنگ و دو رنگ']
const tirajList = ['تیراژ 500 عدد به بالا', 'تیراژ 1000 عدد به بالا', 'تیراژ 250 عدد به بالا', 'تیراژ 50 عدد به بالا']

const text2 = ' چاپ سربرگ سایز'
const text3 = ' چاپ یادداشت سایز'
let typeFunction2 = (a) => a.concat(text2)
let typeFunction3 = (a) => a.concat(text3)
const size1 = 'سایز فایل '
const size2 = ' (عمودی یا افقی)'
let sizeFunction = (a) => size1.concat(a,size2)
const paperList = ['کاغذ تحریر خارجی', 'کاغذ تحریر 80 خارجی، تحریر 100 و کتان 120', 'انواع کاغذ تحریر خارجی و ایرانی','انواع کاغذ تحریر، گلاسه و کرافت', 'تحریر 80 گرم و گلاسه 135 گرم', 'کاغذ کاربن دار خارجی', 'کاغذ تحریر خارجی / الوان ایرانی', 'کاغذ گلاسه 135 گرم تا 300 گرم', 'کاغذ گلاسه 300 گرم', 'گلاسه 135 گرم تا 200 گرم', 'گلاسه 200 گرم تا 300 گرم', 'کاغذ گلاسه', 'کاغذ تحریر', 'انواع کاغذ تحریر و گلاسه', 'کاغذ گلاسه 200، 250 و 300 گرم​', 'مقوا پشت طوسی 200، 250 و 300 گرم​']
const orderList = ['تحویل یکروزه تا 6 روزه', 'تحویل یکروزه تا 8 روزه', 'تحویل یکروزه تا 12 روزه', 'تحویل 8 روزه', 'تحویل ۷ تا ۹ روزه', 'تحویل 5 تا 14 روزه', 'تحویل 3 روزه تا 8 روزه', 'تحویل 3 روزه تا 12 روزه', 'تحویل 4 روزه', 'تحویل 5 الی 10 روز کاری', 'تحویل 7 الی 8 روز کاری', 'تحویل 5 روز کاری', 'تحویل 10 روز کاری', 'تحویل 3 الی 14 روز کاری', 'تحویل 4 الی 8 روز کاری', 'تحویل 4 تا 7 روز کاری', 'زمان تحویل 8 الی 10 روز کاری']

console.log(paperList)
console.log(orderList)

const t4 = 'چاپ پاکت '
const designList = ['تحریر 80 و 100 و 120 گرم', 'تحریر 80 و 100 و 140 گرم / کرافت 80 گرم']
const paper1 = 'کتان 120 گرم / گلاسه 135 گرم'

const t5 = 'چاپ تراکت سایز '
const t51 = 'چاپ تراکت پرفراژدار سایز '

let typeFunction = (a,b) => a.concat(b)

const L1 = 'چاپ لیبل '
const L2 = ' با روکش '
const L3 = ' بدون روکش '
const Ld = 'دورصاف / دایره ای / برش خاص'

let chapFunction = (a,b) => L1.concat(a,b)

const n1 = '1000, 2000'
const s1 = ' و '
const m1 = '5000 شماره'

let sizeFunction2 = () => n1.concat(s1,m1)

const n2 = '3000, 6000'
const s2 = ' و '
const m2 = '9000 شماره'

let sizeFunction3 = () => n2.concat(s2,m2)

const sizeList = ['انواع سایز A6 تا A3', 'سایز 10\u00D721', 'سایز A4']

const f1 = 'فاکتور کاربن دار '

const b1 = 'چاپ بروشور سایز '
const b2 = 'چاپ بروشور '
const latList = ['2لت','2لت مربع', '3لت مربع']
const face = 'بدون روکش و با روکش'
const size3 = 'سایز '

const c1 = 'چاپ کاتالوگ '
const c2 = 'چاپ کاتالوگ دفترچه ای '
const c3 = 'کاتالوگ'
const nameList = [' 2 لت (تک برگی با یک خط تا)', ' 3 لت (تک برگی با 2 خط تا)', '2 لت (تک برگ با 1 خط تا) عمومی', '2 لت (تک برگ با 1 خط تا) اختصاصی', 'تک برگی', '3 لت (تک برگ با 2 خط تا مربع)', '3 لت (تک برگ با 2 خط تا مستطیل)']
const cat1 = 'روکش سلفون مات و براق / یووی براق'
const cat2 = 'امکان خدمات طلاکوب، نقره کوب و یووی موضعی'
const cat3 = 'کاغذ '
const cat4 = 'کاغذ داخلی '
const cat5 = 'کاغذ جلد '

const p1 = 'چاپ پوستر '
const p2 = 'چاپ پوستر سایز '

const f2 = 'چاپ فولدر تبلیغاتی کد'
const f3 = 'چاپ فولدر تبلیغاتی اقتصادی کد'
const roList = ['انواع روکش سلفون مات و براق، یووی براق', 'فولدر اقتصادی و ارزان و جایگزین مناسب پوشه​', 'بدون روکش و امکان تولید با روکش​']

const pList = ['دارای جیب، فضای کارت ویزیت و فضای سی دی​', 'دارای جیب مناسب جهت نگهداری کاغذ، بروشور', 'دارای جیب مناسب​', 'دارای جیب و فضای کارت ویزیت​', 'دارای جیب فانتزی​', 'دارای جیب مناسب جهت نگهداری کاغذ، بروشور و …​', 'دارای جیب و فضای کارت ویزیت']

const oList = ['صحافی شده و ساخته شده تحویل میگردد​', 'بصورت قفلی و بصورت باز تحویل میگردد']

console.log(roList)
console.log(pList)

const data = [{
    type: 'business-card',
    items: [{
            id: 0,
            image: image1,
            title: typeFunction(t1,'لمینت براق'),
            chap: chapList[1],
            design: 'دورگرد / طرح موج / طلاکوب / دایره / ویزیتی',
            paper: 'گلاسه 300 گرم با روکش مات و یووی موضعی',
            tiraj: tirajList[0]
        },
        {
            id: 1,
            image: image1,
            title: typeFunction(t1,'سلفون براق'),
            chap: chapList[1],
            design: 'دورصاف / دورگرد / طلاکوب / طرح موج',
            paper: 'گلاسه 300 گرم با روکش سلفون براق',
            tiraj: tirajList[0]
        },
        {
            id: 2,
            image: image1,
            title: typeFunction(t1,'لمینت برجسته'),
            chap: chapList[1],
            design: 'دورگرد / مربع / ویزیتی / طلاکوب',
            paper: 'گلاسه 300 گرم با روکش مات و یووی موضعی',
            tiraj: tirajList[0]
        },
        {
            id: 3,
            image: image1,
            title: typeFunction(t1,'سلفون مات'),
            chap: chapList[1],
            design: 'دورصاف / دورگرد / موضعی / طلاکوب / طرح موج',
            paper: 'گلاسه 300 گرم با روکش سلفون مات',
            tiraj: tirajList[0]
        },
        {
            id: 4,
            image: image1,
            title: typeFunction(t1,'گلاسه'),
            chap: chapList[1],
            design: 'روکش یووی / بدون روکش / فیلتردار',
            paper: 'گلاسه 300 گرم',
            tiraj: tirajList[1]
        },
        {
            id: 5,
            image: image1,
            title: typeFunction(t1,'لمینت برجسته مخملی'),
            chap: chapList[1],
            design: 'دورگرد / مربع / طلاکوب / موضعی',
            paper: 'گلاسه 300 گرم با روکش مات مخملی و یووی موضعی',
            tiraj: tirajList[1]
        },
        {
            id: 6,
            image: image1,
            title: typeFunction(t1,'پی وی سی'),
            chap: chapList[0],
            design: 'دورگرد / ساده و متالیک',
            paper: '300 ، 500 و 760 میکرون',
            tiraj: tirajList[2]
        },
        {
            id: 7,
            image: image1,
            title: typeFunction(t1,'لمینت مات'),
            chap: chapList[0],
            design: 'دورگرد / طرح موج / طلاکوب / دایره / ویزیتی',
            paper: 'گلاسه 300 گرم با روکش لمینت مات',
            tiraj: tirajList[0]
        },
        {
            id: 8,
            image: image1,
            title: typeFunction(t1,'سوسماری'),
            chap: chapList[1],
            design: 'دورصاف',
            paper: 'گلاسه 300 گرم با سلفون براق طرح دار',
            tiraj: tirajList[1]
        },
        {
            id: 9,
            image: image1,
            title: typeFunction(t1,'کرافت دورگرد'),
            chap: chapList[0],
            design: 'دورگرد / دورصاف',
            paper: 'کاغذ کرافت 300 گرم خارجی',
            tiraj: tirajList[1]
        },
        {
            id: 10,
            image: image1,
            title: typeFunction(t1,'شیشه ای دورگرد'),
            chap: chapList[0],
            design: 'نیمه مات / یکرو',
            paper: 'ورق پی وی سی شیشه ای 500 میکرون',
            tiraj: tirajList[0]
        },
        {
            id: 11,
            image: image1,
            title: typeFunction(t1,'کتان آلمان و امباس'),
            chap: chapList[0],
            design: 'دورگرد و دورصاف / مربع / طلاکوب / لمینت کتان',
            paper: 'کتان بافت دار آلمان و امباس 300 گرم',
            tiraj: tirajList[1]
        },
        {
            id: 12,
            image: image1,
            title: typeFunction(t1,'برش خاص'),
            chap: chapList[1],
            design: 'انواع کارت ویزیت ساده / بافت دار',
            paper: 'مخملی / طلاکوب / نقره کوب',
            tiraj: tirajList[1]
        },
        {
            id: 13,
            image: image1,
            title: typeFunction(t1,'مقوا کارتی'),
            chap: chapList[0],
            design: 'دورصاف / دورگرد / نقره کوب',
            paper: 'مقوا کارتی 300 گرم بدون روکش',
            tiraj: tirajList[1]
        },
        {
            id: 14,
            image: image1,
            title: typeFunction(t1,'طرح چرم'),
            chap: chapList[0],
            design: 'دورگرد / دورصاف',
            paper: 'گلاسه 300 گرم با سلفون براق طرح چرم',
            tiraj: tirajList[1]
        },
        {
            id: 15,
            image: image1,
            title: typeFunction(t1,'سلفون مخملی'),
            chap: chapList[1],
            design: 'دورگرد / دورصاف / طلاکوب / موضعی',
            paper: 'گلاسه 300 گرم با روکش مات مخملی',
            tiraj: tirajList[1]
        },
        {
            id: 16,
            image: image1,
            title: typeFunction(t1,'دیجیتال'),
            chap: chapList[3],
            design: 'تحویل فوری',
            paper: 'دورصاف و دورگرد',
            tiraj: tirajList[2]
        },
        {
            id: 17,
            image: image1,
            title: typeFunction(t1,'دایره ای'),
            chap: chapList[0],
            design: 'انواع کارت ویزیت ساده / بافت دار',
            paper: 'مخملی / طلاکوب / نقره کوب',
            tiraj: tirajList[1]
        },
    ]
},
{
    type: 'header',
    items: [{
            id: 0,
            image: image1,
            title: typeFunction2('A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[0],
            tiraj: orderList[0]
        },
        {
            id: 1,
            image: image1,
            title: typeFunction2('A5 دقیق'),
            chap: chapList[0],
            design: sizeFunction('14.8\u00D721'),
            paper: paperList[1],
            tiraj: orderList[1]
        },
        {
            id: 2,
            image: image1,
            title: typeFunction3('A6'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D710'),
            paper: paperList[2],
            tiraj: orderList[3]
        },
        {
            id: 3,
            image: image1,
            title: typeFunction3('9.6\u00D710'),
            chap: chapList[0],
            design: sizeFunction('9.6\u00D710'),
            paper: paperList[0],
            tiraj: orderList[0]
        },
        {
            id: 4,
            image: image1,
            title: typeFunction2('A4 کوچک'),
            chap: chapList[0],
            design: sizeFunction('20\u00D729'),
            paper: paperList[0],
            tiraj: orderList[0]
        },
        {
            id: 0,
            image: image1,
            title: typeFunction2('A4 دقیق'),
            chap: chapList[0],
            design: sizeFunction('21\u00D729.7'),
            paper: paperList[1],
            tiraj: orderList[1]
        },
        {
            id: 0,
            image: image1,
            title: typeFunction2('A5'),
            chap: chapList[0],
            design: sizeFunction(20*14.5),
            paper: paperList[0],
            tiraj: orderList[0]
        }]
},
{
    type: 'paper bag',
    items: [{
            id: 0,
            image: image1,
            title: typeFunction(t4,'A3'),
            chap: chapList[0],
            design: designList[0],
            paper: paper1,
            tiraj: orderList[4]
        },
        {
            id: 1,
            image: image1,
            title: typeFunction(t4,'A4'),
            chap: chapList[0],
            design: designList[1],
            paper: paper1,
            tiraj: orderList[5]
        },
        {
            id: 2,
            image: image1,
            title: typeFunction(t4,'A5'),
            chap: chapList[0],
            design: designList[1],
            paper: paper1,
            tiraj: orderList[5]
        },
        {
            id: 3,
            image: image1,
            title: typeFunction(t4,'نامه'),
            chap: chapList[0],
            design: designList[0],
            paper: paper1,
            tiraj: orderList[4]
        }
    ]
},
{
    type: 'tract',
    items: [{
            id: 0,
            image: image1,
            title: typeFunction(t5,'B6'),
            chap: typeFunction(t5,'B6'),
            design: sizeFunction('17\u00D712'),
            paper: chapList[0],
            tiraj: orderList[6]
        },
        {
            id: 1,
            image: image1,
            title: typeFunction(t5,'A4'),
            chap: typeFunction(t5,'A4'),
            design: sizeFunction('29\u00D720'),
            paper: chapList[0],
            tiraj: orderList[6]
        },
        {
            id: 2,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 3,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 4,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 5,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 6,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 7,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 8,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 9,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 10,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 11,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 12,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 13,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 14,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 15,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        },
        {
            id: 16,
            image: image1,
            title: typeFunction(t5,'A5'),
            chap: chapList[0],
            design: sizeFunction('14.5\u00D720'),
            paper: paperList[3],
            tiraj: orderList[3]
        }
    ]
},
{
    type: 'label',
    items: [{
            id: 0,
            image: image1,
            title: chapFunction(L2, 'سلفون براق'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 1,
            image: image1,
            title: chapFunction(L3, 'طلاکوب'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 2,
            image: image1,
            title: chapFunction(L3, '(مناسب نوشتن)'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 3,
            image: image1,
            title: chapFunction(L2, 'یووی براق'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 4,
            image: image1,
            title: typeFunction(L2, 'شیشه ای خوانا و ناخوانا'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 5,
            image: image1,
            title: chapFunction(L2, 'سلفون مات طلاکوب'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 6,
            image: image1,
            title: chapFunction(L2, 'سلفون مات'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 7,
            image: image1,
            title: chapFunction(L2, 'سلفون براق طلاکوب'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 8,
            image: image1,
            title: typeFunction(L2, 'یووی براق فیلتردار'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 9,
            image: image1,
            title: typeFunction(L2, 'متالایز نقره ای'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        },{
            id: 0,
            image: image1,
            title: chapFunction(L2, 'سلفون براق'),
            chap: chapList[1],
            design: Ld,
            tiraj: tirajList[1]
        }
    ]
},
{
    type: 'factor',
    items: [{
            id: 0,
            image: image1,
            title: typeFunction(f1, '2 رنگ مشکی قرمز'),
            chap: sizeList[0],
            design: sizeFunction2(),
            paper: paperList[5],
            tiraj: orderList[9]
        },{
            id: 1,
            image: image1,
            title: typeFunction(f1, 'تک رنگ سورمه ای'),
            chap: sizeList[0],
            design: sizeFunction2(),
            paper: paperList[5],
            tiraj: orderList[9]
        },{
            id: 2,
            image: image1,
            title: typeFunction(f1, 'تک رنگ مشکی'),
            chap: sizeList[0],
            design: sizeFunction2(),
            paper: paperList[5],
            tiraj: orderList[9]
        },{
            id: 3,
            image: image1,
            title: typeFunction(f1, 'رنگی'),
            chap: sizeList[0],
            design: sizeFunction2(),
            paper: paperList[5],
            tiraj: orderList[10]
        },{
            id: 4,
            image: image1,
            title: typeFunction(f1, 'فوری'),
            chap: sizeList[0],
            design: sizeFunction2(),
            paper: paperList[5],
            tiraj: orderList[11]
        },{
            id: 5,
            image: image1,
            title: 'فاکتور تحریر و الوان تک رنگ مشکی',
            chap: sizeList[0],
            design: sizeFunction2(),
            paper: paperList[6],
            tiraj: orderList[10]
        },{
            id: 6,
            image: image1,
            title: 'قبض تکرنگ مشکی کاربن دار 10\u00D721',
            chap: sizeList[1],
            design: sizeFunction3(),
            paper: paperList[5],
            tiraj: orderList[10]
        },{
            id: 7,
            image: image1,
            title: 'قبض چند برگی تحریر 10\u00D721',
            chap: sizeList[1],
            design: sizeFunction3(),
            paper: paperList[6],
            tiraj: orderList[10]
        },{
            id: 8,
            image: image1,
            title: 'قبض تک برگی تحریر 10\u00D721​',
            chap: sizeList[1],
            design: sizeFunction3(),
            paper: paperList[6],
            tiraj: orderList[10]
        },{
            id: 9,
            image: image1,
            title: 'فاکتور مخصوص پرینتر',
            chap: sizeList[2],
            design: sizeFunction2(),
            paper: paperList[6],
            tiraj: orderList[10]
        },{
            id: 10,
            image: image1,
            title: 'فاکتور تحریر و الوان رنگی',
            chap: sizeList[0],
            design: sizeFunction2(),
            paper: paperList[6],
            tiraj: orderList[10]
        },{
            id: 11,
            image: image1,
            title: 'فاکتور تحریر و الوان دو رنگ',
            chap: sizeList[0],
            design: sizeFunction2(),
            paper: paperList[6],
            tiraj: orderList[12]
        },{
            id: 12,
            image: image1,
            title: 'فاکتور تحریر تک برگی تمام رنگی',
            chap: sizeList[2],
            design: sizeFunction2(),
            paper: paperList[6],
            tiraj: orderList[10]
        }
    ]
},
{
    type: 'bruchour',
    items: [{
            id: 0,
            image: image1,
            title: typeFunction(b1, 'A5'),
            chap: typeFunction(size1, '14.5\u00D720'),
            design: paperList[3],
            paper: tirajList[1],
            tiraj: orderList[13]
        },{
            id: 1,
            image: image1,
            title: typeFunction(b1, 'A4'),
            chap: typeFunction(size1, '29\u00D720'),
            design: paperList[3],
            paper: tirajList[1],
            tiraj: orderList[13]
        },{
            id: 2,
            image: image1,
            title: typeFunction(b1, 'A3'),
            chap: typeFunction(size1, '40\u00D729'),
            design: paperList[3],
            paper: tirajList[1],
            tiraj: orderList[13]
        },{
            id: 3,
            image: image1,
            title: typeFunction(b2, latList[0]),
            chap: typeFunction(size3, '14.4\u00D720'),
            design: paperList[11],
            paper: tirajList[1],
            onface: face,
            tiraj: orderList[13]
        },{
            id: 4,
            image: image1,
            title: typeFunction(b1, 'B5'),
            chap: typeFunction(size1, '17\u00D724'),
            design: paperList[3],
            paper: tirajList[1],
            tiraj: orderList[13]
        },{
            id: 5,
            image: image1,
            title: typeFunction(b1, 'B5'),
            chap: typeFunction(size1, '34\u00D724'),
            design: paperList[3],
            paper: tirajList[1],
            tiraj: orderList[13]
        },{
            id: 6,
            image: image1,
            title: typeFunction(b2, latList[2]),
            chap: typeFunction(size3, '13\u00D713'),
            design: paperList[3],
            paper: tirajList[1],
            onface: face,
            tiraj: orderList[13]
        },{
            id: 7,
            image: image1,
            title: typeFunction(b2, latList[1]),
            chap: typeFunction(size1, '19\u00D719'),
            design: paperList[3],
            paper: tirajList[1],
            onface: face,
            tiraj: orderList[13]
        },{
            id: 8,
            image: image1,
            title: typeFunction(b2, latList[1]),
            chap: typeFunction(size1, '14.5\u00D714.4'),
            design: paperList[3],
            paper: tirajList[1],
            onface: face,
            tiraj: orderList[13]
        },{
            id: 9,
            image: image1,
            title: typeFunction(b2, latList[2]),
            chap: typeFunction(size1, '16\u00D716'),
            design: paperList[3],
            paper: tirajList[1],
            onface: face,
            tiraj: orderList[13]
        }
    ]
},
{
    type: 'catalogue',
    items: [{
            id: 0,
            image: image1,
            title1: typeFunction(c1, nameList[2]),
            title: typeFunction(c3, nameList[0]),
            chap: paperList[7],
            design: cat1,
            design1: cat2,
            paper: tirajList[1],
            tiraj: orderList[14]
        },{
            id: 1,
            image: image1,
            title1: typeFunction(c1, nameList[3]),
            title: typeFunction(c3, nameList[0]),
            chap: paperList[7],
            design: cat1,
            design1: cat2,
            paper: tirajList[1],
            tiraj: orderList[14]
        },{
            id: 2,
            image: image1,
            title1: typeFunction(c1, nameList[4]),
            title: typeFunction(c3, nameList[0]),
            chap: paperList[8],
            design: cat1,
            paper: tirajList[1],
            tiraj: orderList[14]
        },{
            id: 3,
            image: image1,
            title1: typeFunction(c1, nameList[5]),
            title: typeFunction(c3, nameList[1]),
            chap: paperList[7],
            design: cat1,
            design1: cat2,
            paper: tirajList[0],
            tiraj: orderList[14]
        },{
            id: 4,
            image: image1,
            title1: typeFunction(c1, nameList[6]),
            title: typeFunction(c3, nameList[1]),
            chap: paperList[7],
            design: cat1,
            design1: cat2,
            paper: tirajList[0],
            tiraj: orderList[14]
        },{
            id: 5,
            image: image1,
            title1: typeFunction(c2, 'A4'),
            title: typeFunction(cat4, paperList[9]),
            chap: typeFunction(cat5, paperList[10]),
            design: cat1,
            design1: cat2,
            paper: tirajList[0],
            tiraj: orderList[14]
        },{
            id: 6,
            image: image1,
            title1: typeFunction(c2, 'A5'),
            title: typeFunction(cat4, paperList[9]),
            chap: typeFunction(cat5, paperList[10]),
            design: cat1,
            design1: cat2,
            paper: tirajList[0],
            tiraj: orderList[14]
        },{
            id: 7,
            image: image1,
            title1: typeFunction(c2, 'B4'),
            title: typeFunction(cat4, paperList[9]),
            chap: typeFunction(cat5, paperList[10]),
            design: cat1,
            design1: cat2,
            paper: tirajList[0],
            tiraj: orderList[14]
        },{
            id: 8,
            image: image1,
            title1: typeFunction(c2, 'B5'),
            title: typeFunction(cat4, paperList[9]),
            chap: typeFunction(cat5, paperList[10]),
            design: cat1,
            design1: cat2,
            paper: tirajList[0],
            tiraj: orderList[14]
        },{
            id: 9,
            image: image1,
            title1: typeFunction(c2, 'مربع 23'),
            title: typeFunction(cat4, paperList[9]),
            chap: typeFunction(cat5, paperList[10]),
            design: cat1,
            design1: cat2,
            paper: tirajList[0],
            tiraj: orderList[14]
        },{
            id: 10,
            image: image1,
            title1: typeFunction(c2, 'مربع 19'),
            title: typeFunction(cat4, paperList[9]),
            chap: typeFunction(cat5, paperList[10]),
            design: cat1,
            design1: cat2,
            paper: tirajList[0],
            tiraj: orderList[14]
        }
    ]
},
{
    type: 'poster',
    items: [{
            id: 0,
            image: image1,
            title: typeFunction(p2, 'A3'),
            chap: typeFunction(p1, 'A3'),
            design: paperList[13],
            paper: chapList[0],
            tiraj: orderList[15]
        },{
            id: 1,
            image: image1,
            title: typeFunction(p2, '70\u00D750'),
            chap: typeFunction(p1, '70\u00D750'),
            design: paperList[13],
            paper: chapList[0],
            tiraj: orderList[15]
        },{
            id: 2,
            image: image1,
            title: typeFunction(p2, '60\u00D745'),
            chap: typeFunction(p1, '60\u00D745'),
            design: paperList[13],
            paper: chapList[0],
            tiraj: orderList[15]
        },{
            id: 3,
            image: image1,
            title: typeFunction(p2, '50\u00D735'),
            chap: typeFunction(p1, '50\u00D735'),
            design: paperList[13],
            paper: chapList[0],
            tiraj: orderList[15]
        },{
            id: 4,
            image: image1,
            title: typeFunction(p1, 'تحریر 80 گرم'),
            chap: typeFunction(p1, 'تحریر 80 گرم'),
            design: paperList[12],
            paper: chapList[0],
            tiraj: orderList[11]
        },{
            id: 5,
            image: image1,
            title: typeFunction(p1, 'گلاسه 135 گرم'),
            chap: typeFunction(p1, 'گلاسه 135 گرم'),
            design: paperList[11],
            paper: chapList[0],
            tiraj: orderList[15]
        },
    ]
},
{
    type: 'folder',
    items: [{
            id: 0,
            image: image1,
            title: typeFunction(f2, '1'),
            paper: paperList[14],
            chap: chapList[3],
            design: roList[0],
            design1 : roList[2],
            tiraj: tirajList[0],
            pocket: pList[1],
            order: oList[1],
            tiraj1: orderList[16]
        },{
            id: 1,
            image: image1,
            title: typeFunction(f3, '2'),
            paper: paperList[15],
            chap: chapList[3],
            design: roList[1],
            design1 : roList[2],
            tiraj: tirajList[0],
            pocket: pList[2],
            order: oList[1],
            tiraj1: orderList[16]
        },{
            id: 2,
            image: image1,
            title: typeFunction(f2, '2'),
            paper: paperList[14],
            chap: chapList[3],
            design: roList[0],
            design1 : roList[1],
            tiraj: tirajList[0],
            pocket: pList[0],
            order: oList[0],
            tiraj1: orderList[16]
        },{
            id: 3,
            image: image1,
            title: typeFunction(f2, '3'),
            paper: paperList[14],
            chap: chapList[3],
            design: roList[0],
            design1 : roList[2],
            tiraj: tirajList[0],
            pocket: pList[1],
            order: oList[1],
            tiraj1: orderList[16]
        },{
            id: 4,
            image: image1,
            title: typeFunction(f2, '4'),
            paper: paperList[15],
            chap: chapList[3],
            design: roList[1],
            design1 : roList[2],
            tiraj: tirajList[0],
            pocket: pList[4],
            order: oList[1],
            tiraj1: orderList[16]
        },{
            id: 5,
            image: image1,
            title: typeFunction(f2, '5'),
            paper: paperList[15],
            chap: chapList[3],
            design: roList[0],
            design1 : roList[2],
            tiraj: tirajList[0],
            pocket: pList[3],
            order: oList[1],
            tiraj1: orderList[16]
        },{
            id: 6,
            image: image1,
            title: typeFunction(f2, '6'),
            paper: paperList[14],
            chap: chapList[3],
            design: roList[0],
            design1 : roList[2],
            tiraj: tirajList[0],
            pocket: pList[3],
            order: oList[0],
            tiraj1: orderList[16]
        },{
            id: 7,
            image: image1,
            title: typeFunction(f2, '7'),
            paper: paperList[14],
            chap: chapList[3],
            design: roList[0],
            design1 : roList[2],
            tiraj: tirajList[0],
            pocket: pList[3],
            order: oList[0],
            tiraj1: orderList[16]
        },{
            id: 8,
            image: image1,
            title: typeFunction(f2, '8'),
            paper: paperList[15],
            chap: chapList[3],
            design: roList[0],
            design1 : roList[2],
            tiraj: tirajList[0],
            pocket: pList[5],
            order: oList[0],
            tiraj1: orderList[16]
        },
    ]
},{
    type: 'cd-pocket',
    items: [{
            id: 0,
            image: image1,
            title: 'لیبل و پاکت سی دی',
            paper: 'جنس پاکت: گلاسه 300',
            chap: 'جنس لیبل: یووی براق',
            order: tirajList[1],
            tiraj: orderList[10]
        }
    ]
}
]

export default data