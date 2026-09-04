const TELEGRAM_BOT_TOKEN = '8949553941:AAGqY-QlksXv5T4bbRzpGM49S-Y_-jT9hiA';
const TELEGRAM_CHAT_ID = '7159728200';

export interface TelegramLeadData {
  type: 'consultation' | 'tariff' | 'contact' | 'course';
  parentName: string;
  phone: string;
  childAge?: string;
  branchName?: string;
  topicOrService?: string;
  comment?: string;
  experience?: string;
}

export async function sendTelegramNotification(data: TelegramLeadData): Promise<boolean> {
  try {
    let title = '🔔 YANGI ARIZA (Logoped City)';
    if (data.type === 'tariff' || (data.topicOrService && data.topicOrService.toLowerCase().includes('tarif'))) {
      title = '💎 YANGI TARIF BUYURTMASI (Logoped City)';
    } else if (data.type === 'course') {
      title = '🎓 KURSGA RO‘YXATDAN O‘TISH (Logoped City)';
    } else if (data.type === 'consultation') {
      title = '📋 KONSULTATSIYA / DIAGNOSTIKA (Logoped City)';
    }

    const now = new Date();
    const timeStr = now.toLocaleString('uz-UZ', { 
      timeZone: 'Asia/Tashkent',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    let message = `${title}\n\n`;
    message += `👤 *Mijoz / Ota-ona:* ${data.parentName}\n`;
    message += `📞 *Telefon:* \`${data.phone}\`\n`;
    
    if (data.childAge) {
      message += `👶 *Bola yoshi:* ${data.childAge}\n`;
    }
    if (data.branchName) {
      message += `🏢 *Filial:* ${data.branchName}\n`;
    }
    if (data.topicOrService) {
      message += `🎯 *Yo‘nalish / Tarif:* ${data.topicOrService}\n`;
    }
    if (data.experience) {
      message += `💼 *Tajriba / Mutaxassisligi:* ${data.experience}\n`;
    }
    if (data.comment) {
      message += `📝 *Izoh / Muammo:* ${data.comment}\n`;
    }

    message += `\n⏰ *Vaqti:* ${timeStr}\n`;
    message += `🌐 *Manba:* Sayt orqali yuborildi`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const resData = await response.json();
    return !!resData.ok;
  } catch (error) {
    console.error('Error sending telegram lead:', error);
    return false;
  }
}
