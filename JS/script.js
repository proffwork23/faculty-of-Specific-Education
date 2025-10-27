let span = document.querySelector(".up");

window.onscroll = function () {
 console.log(this.scrollY);
 if (this.scrollY >= 40) {
   span.classList.add("show");
 } else {
   span.classList.remove("show");
   }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// 1. تفعيل / إلغاء تفعيل قائمة التنقل الرئيسية
menuToggle.addEventListener('click', () => {
    // استخدم classList.toggle لتطبيق التحريك في CSS
    navMenu.classList.toggle('active');
    // تغيير أيقونة الزر
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times'); // أيقونة الإغلاق
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars'); // أيقونة القائمة
    }
});

// 2. تفعيل القوائم المنسدلة بالنقر على الموبايل
const dropdownTitles = document.querySelectorAll('.container .list .li-list h6.title');

dropdownTitles.forEach(title => {
    title.addEventListener('click', function(event) {
        // إذا كنا على شاشة صغيرة (Mobile)
        if (window.innerWidth <= 768) {
            const parentLi = this.closest('.li-list');
            const mainList = parentLi.querySelector('.main-list');
            
            // تحقق إذا كانت القائمة الفرعية موجودة
            if (mainList) {
                event.preventDefault(); // منع أي انتقال افتراضي
                // إغلاق كل القوائم المفتوحة الأخرى
                document.querySelectorAll('.container .list .li-list.open').forEach(openLi => {
                    if (openLi !== parentLi) {
                        openLi.classList.remove('open');
                        const openList = openLi.querySelector('.main-list');
                        if (openList) {
                            openList.style.display = 'none';
                        }
                    }
                });
                
                // فتح/إغلاق القائمة الحالية
                parentLi.classList.toggle('open');
                mainList.style.display = parentLi.classList.contains('open') ? 'block' : 'none';
            }
        }
    });
});

// 3. تفعيل القوائم الفرعية الفرعية (secundery-list) بالنقر
const subDropdownTitles = document.querySelectorAll('.container .list .main-list li .title-2');

subDropdownTitles.forEach(title => {
    title.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            event.preventDefault(); // منع أي انتقال افتراضي لـ h6.title
            const parentLi = this.closest('li');
            const secunderyList = parentLi.querySelector('.secundery-list');

            if (secunderyList) {
                // فتح/إغلاق القائمة الفرعية
                if (secunderyList.style.display === 'block') {
                    secunderyList.style.display = 'none';
                } else {
                    secunderyList.style.display = 'block';
                }
            }
        }
    });
});
