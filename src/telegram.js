class Telegram {
  constructor() {
    this.token = '1724317118:AAH9tRPqG-x1XKTOgwNfKkQLLsSG6t0Bjro'
    this.chat = '-574196166'
    this.url = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat}`
  }
  sendMessage(msg) {
    let url = this.url +`&text=${encodeURIComponent(msg)}`+'&parse_mode=HTML'
    console.log(url)
    this.post(url, msg)
  }


  //Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      // body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData
  }
}


  /* https://api.telegram.org/bot$token/sendMessage?chat_id=$chat&text=Hello+World */