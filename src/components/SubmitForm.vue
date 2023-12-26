<template>
  <div class="submit_container">
    <div class="submit_form">
      <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path opacity="1" fill="#fcfcfc" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
      <h2 class="title">
        {{ $t('contacts.title') }}
      </h2>
      <h3 class="text">
        {{ $t('contacts.text') }}
      </h3>
      <form action="#" method="post">
        <div class="form-group">
          <input 
            class="input_text"
            type="text" 
            :placeholder="$t('contacts.placeholderName')"
            name="name" 
            required
          >
        </div>

        <div class="form-group">
          <input 
            class="input_text"
            type="email" 
            :placeholder="$t('contacts.placeholderEmail')"
            name="email" 
            required
          >
        </div>

        <div class="form-group">
          <textarea
            class="input_message"
            :placeholder="$t('contacts.placeholderMessage')"
            name="message"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <div 
            type="submit" 
            class="submit_button" 
            @click="this.$router.push('./')"
          >
            {{ $t('contacts.button') }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitForm',
}
</script>

<style scoped>
.submit_container {
  height: calc(100vh - 70px);
  background: url('../assets/mapBackground.webp');
  background-size: cover;
  display: flex;
  justify-content: center;
}

.submit_container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.submit_form {
  max-width: 600px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
}

.title {
  color: #fff;
  font-size: 28px;
  font-weight: normal;
  letter-spacing: 4px;
  margin: 5px 0;
}

.text {
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 2px;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.input_text {
  margin-bottom: 8px;
  width: 420px;
  height: 28px;
  border-radius: 5px;
  border: none;
}

.input_message {
  width: 420px;
  height: 80px;
  border-radius: 5px;
}

.input_message:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.form-group {
  display: flex;
  justify-content: center;
}

.submit_button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 50px;
  padding: 0 30px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: #1e4057;
  border-radius: 4px;
  cursor: pointer;
  color: #f8f9fa;
  transition: background-color 0.3s ease;
}

.submit_button:hover {
  background-color: #142c3b;
}
</style>