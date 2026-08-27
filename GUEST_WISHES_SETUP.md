# Mohamed & Amira — Guest Wishes Upgrade

تمت إضافة:
- تهاني مكتوبة (الاسم + الرسالة)
- تسجيل تهنئة صوتية من الميكروفون حتى 60 ثانية
- معاينة التسجيل قبل الإرسال
- قسم لعرض التهاني
- تخزين محلي كـ fallback

## مهم جدًا
لو عايز التهاني والتسجيلات تظهر لكل زوار الموقع وتظل محفوظة بعد إغلاق المتصفح، لازم توصيل Supabase (Firestore + Storage).
النسخة الحالية تعمل فورًا، لكن التخزين المحلي للرسائل/الصوتيات خاص بكل متصفح.

### Supabase
1. أنشئ مشروع Supabase.
2. أضف Web App.
3. فعّل Firestore Database.
4. فعّل Storage.
5. ضع إعدادات المشروع في `firebase-config.js` (يمكن إنشاؤه من نفس بيانات Supabase).
6. بعد الربط نستبدل دوال localStorage بدوال Firestore/Storage.

> لا تضع أي Service Account key أو مفتاح خاص داخل الموقع. إعدادات Supabase Web App العادية مناسبة للواجهة، مع ضبط Security Rules بشكل صحيح.
