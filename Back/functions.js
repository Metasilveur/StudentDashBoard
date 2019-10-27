const crypto = require('crypto')
    algorithm = 'aes-256-cbc';
    key = crypto.randomBytes(32);
    iv = crypto.randomBytes(16);

module.exports = {
    calculateAverage: function(arr) {
        var sum = 0
            count=0
        for(var key in arr){
            count++
            sum+= arr[key] 
        }
        return sum/count
    },

    assignTagWithGrade: function(average){
       if(average < 6)
            return "Danger : élève en naufrage !"
       else if(average >= 6 && average < 12)
            return "Attention : élève en apnée !"
       else if(average >= 12 && average < 14)
            return "Bravo : élève à flot !"
       else
            return "Félicitations : élève  au sec !"
    },

    encrypt: function(text) {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    },

    decrypt: function(text) {
        let iv = Buffer.from(text.iv, 'hex');
        let encryptedText = Buffer.from(text.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    },

    assignTagWithDistance: function(dist){
        if(dist >= 0 && dist < 10)
            return "Très Proche"
        else if(dist >= 10 && dist < 25)
            return "Proche"
        else if(dist >= 25 && dist < 50)
            return "Pas Si Proche Que Ça"
        else
            return "RIP !"
    },

    assignTagWithAbsc: function(abs){
        if(abs >= 0 && abs < 10)
            return "À l'aise"
        else if(abs >= 10 && abs < 30)
            return "Attention !"
        else if(abs >= 30 && abs < 60)
            return "Conseil de Discipline"
        else
            return "RIP et bye-bye !"
    }
}