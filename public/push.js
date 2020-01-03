var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BPi5slrBXuaVni4CPs0aW7UvGqxHh_OmQNscGlVwfJSqBW78q-zMX2lZH58VlgmLryKxX2UWkjQWVyKfBnzu2CQ",
    "privateKey": "kPGZbKwXkjscmJSB47a3R79GRvSkAbjjB3gbgPs33Bc"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fXjwbaWgFT8:APA91bFqeWGeBtH4MCOCMuS_GsalgnM5zqBvj-R9UyliNbq9Qp4LpHeSKwmQXH42Kzc883fS53v4ebfmU7-X_qlZVzNo_W-5KiQSEwnwSVSYzbz4nSMVAT0yo8SdrNmrfTMs4n6HoT6R",
    "keys": {
        "p256dh": "BLGAlCdz8cLKa3Yut7BDQS95q4v2jr8xk102y+fmOxpYfbuabAyy0UCdIybBZ8RaYYLeTC/qJprIVYAnJUj3g7U=",
        "auth": "8K42gcGWZSiaIt1tLx7vjA=="
    }
};
var payload = 'Terimakasih telah menggunakan football!';

var options = {
    gcmAPIKey: '484197386555',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);