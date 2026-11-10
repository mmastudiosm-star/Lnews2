// همون اول فایل
if (window.__SERVER_ENABLED__ === false) {
  console.warn('سرور قطع است، لود خبرها متوقف شد');
  // هر کدی اینجا نذار — killswitch خودش صفحه رو عوض میکنه
} else {
  // ✅ کد عادی تو: createClient، fetchNews، ...
  const supabase = createClient(URL, KEY);
  // ...
}