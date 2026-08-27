# تشغيل التهاني المكتوبة Live — بدون Firebase

النسخة دي تستخدم Supabase بدل Firebase.

## الخطة المجانية
Supabase عنده Free plan بقيمة $0، وتضم قاعدة بيانات Postgres بحجم 500MB وطلبات API غير محدودة ضمن الخطة، مع ملاحظة أن المشاريع المجانية قد تدخل في وضع pause بعد أسبوع من عدم النشاط.

## مهم جدًا: قاعدة تهنئات مستقلة

التهنئات الخاصة بـ Mohamed & Amira محفوظة في جدول مستقل اسمه `wishes_mohamed_amira`، لذلك لن يتم عرض أي تهنئات من دعوة أو عريس سابق.

## الخطوات

1. اعمل حساب في Supabase وأنشئ Project جديد.
2. افتح SQL Editor.
3. انسخ كل محتوى `supabase-setup.sql` وشغله.
4. من Project Settings > API انسخ:
   - Project URL
   - Publishable/anon key العامة
5. افتح `script.js`.
6. غيّر:
   `PASTE_SUPABASE_URL_HERE`
   إلى Project URL.
7. غيّر:
   `PASTE_SUPABASE_ANON_KEY_HERE`
   إلى المفتاح العام.
8. ارفع ملفات المشروع على GitHub Pages.

### مهم
لا تضع `service_role` key داخل الموقع نهائيًا.
المفتاح المطلوب هنا هو المفتاح العام فقط، والحماية تتم عن طريق RLS Policies الموجودة في ملف SQL.

### النتيجة
أي شخص يدخل الدعوة:
- يكتب اسمه ورسالة التهنئة.
- يضغط إرسال.
- الرسالة تتحفظ في قاعدة البيانات.
- أي شخص آخر يفتح الموقع يشوف تهنئات Mohamed & Amira فقط.

### ملاحظة
لا تحذف جدول `wishes` القديم؛ الموقع الجديد لا يستخدمه أصلًا.


## FINAL VERSION
The final ZIP is already configured with the project URL and public publishable key. Do not replace it with a secret/service_role key.
