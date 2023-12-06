const Snaptik = require('snaptik');
const fs = require('fs');
const fetch = require('node-fetch');
const colors = require("colors");
const readline = require("readline-sync");

const date = () => new Date().toLocaleTimeString({
    timeZone: "Asia/Jakarta",
});

const linktt = readline.question("[+] Link Tiktok: ");

if (linktt) {
    const sneptik = new Snaptik(linktt);
    sneptik.download().then(downloadvidio => {
        if (downloadvidio.status == 200) {
            try {
                const foldername = './temp/' + downloadvidio.metadata.author_unique_id
                if (!fs.existsSync(foldername)) {
                    fs.mkdirSync(foldername, { recursive: true });
                }

                fetch(downloadvidio['link_1'])
                    .then(response => response.buffer())
                    .then(buffer => {
                        console.log(`[+] [${date()}] ${colors.green(`Downloading vidio tiktok from @${downloadvidio.metadata.author_unique_id}`)}`);
                        fs.writeFileSync(`./${foldername}/${downloadvidio.metadata.embed_product_id}.mp4`, buffer);
                    })
                    .catch(error => {
                        console.log(`[+] [${date()}] ${colors.red(`Error fetching video content: ${error}`)}`);
                    });
            } catch (error) {
                console.log(`[+] [${date()}] ${colors.red(`Error fetching video content: ${error}`)}`);
            }
        } else {
            console.log(`[+] [${date()}] ${colors.red(`Vidio tidak tersedia atau private.`)}`);
        }
    })
} else {
    console.log(`[+] [${date()}] ${colors.red(`Masukkan link kamu dengan benar.`)}`);
}

const snaptik = new Snaptik(linktt);
snaptik.download().then(vidio => {
    console.log(vidio)
}).catch(error => {
    console.error('Error:', error);
});
