export const contactPage = `
    <div class="contact">
    <h1 class="bb-sec-6 ">KAPCSOLAT </h1>
    <h5>peter.taught@gmail.com</h5>
    <form id="contactForm" action="https://formspree.io/xqkgaeog" method="POST">
      <div class="input-group">
        <label for="_replyto">Email</label>
        <input type="email" name="_replyto">
      </div>
      <div class="input-group">
        <label for="subject">Tárgy</label>
        <input type="text" name="subject">
      </div>
      <div class="input-group">
        <label for="message">Üzenet</label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="input-group">
      <button id="contactButton" class="button button16">Küldés</button
      </div>
    </form>
    <h5 id="contactStatus"></h5>
    </div>
`