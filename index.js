const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('يرجى مسح الكود أعلاه لربط بوت أبو حسن بالواتساب');
});

client.on('ready', () => {
    console.log('بوت أبو حسن جاهز للعمل الآن!');
});

client.on('message', message => {
	if(message.body === 'أبو حسن') {
		message.reply('لبيه! معك بوت أبو حسن، كيف أخدمك؟');
	}
});

client.initialize();

