استخدمتُ Reactjs لعرض صفحة المنتجات. لكن لماذا لم أجعل الخادم يرجع markup باستخدام template engine مثل ejs ولا أُتعب نفسي بالـ React؟ حسناً هذا ممكن لو كان المطلوب فقط عرض المنتجات مع الـ QR code لكل منتوج، لكن هناك متطلب آخر من أسوار هو أنه فقط الـ admin user يستطيع رؤية الـ qr code، اذن هنا نحتاج عمل authentication و authoriation كامل، وهذا غير ممكن الا باستخدام اطار عمل على الـ fron-end مثل Angular أو مكتبة مثل React.

الـ qr code يتم توليده على صفحة العميل من خلال بيانات المنتوج ولا يتم خزنه في قاعدة البيانات أبدا، فالـbackend لا علاقة له أبداً بهذه الشفرة. هذا الفديو ساعدني في توليد هذه الشفرة على صفحة العميل https://www.youtube.com/watch?v=njeaCPYuDIg .

طبعاً يمكن توليد هذه الشفرة على الخادم وخزنها في قاعدة البيانات على شكل data، وهذا الفيديو يبين ذلك: https://www.youtube.com/watch?v=s1jbFY36-ic ، لكن الصحيح هو توليده على الصفحة العميل.

لتشغيل التطبيق، اضغط هذا الرابط: https://aswar-task.netlify.app 


aswar-client-array-data

•	The data behind the app is an array in a module named fakeProductService.
•	The app is complete for add new product and delete the row from UI, but not edit.
•	The app is complete for generating QR code that holds product’s details.
•	Hiding elements based on user not implemented because we can implement authentication and authorization only if our app connected to the backend that talks to database to get responses and token and so on.


