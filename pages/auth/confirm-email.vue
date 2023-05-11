<template>
    <AuthPageLayout title="Verification" :hide-logo="true" :hide-privacy-note="true">
        <p class="tertiary-text center-text">Please enter the verification code sent to your email address.</p>
        <form>
            <ion-item lines="none" class="code-input">
                <ion-input :id="i + '-code-input'" v-for="i in 6" :key="i" maxlength="1" :clear-on-edit="true" type="text" inputmode="numeric"/>
            </ion-item>
            <p class="tertiary-text">10:00</p>
        </form>
        <p class="tertiary-text">Didn't receive a code? <span router-link="/auth/resend-code">Resend it</span></p>
    </AuthPageLayout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.code-input {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--normal-spacing);

  --padding-start: 0;
  --inner-padding-start: 0;
  --padding-end: 0;
  --inner-padding-end: 0;
  --padding-top: var(--normal-spacing);
  --padding-bottom: var(--normal-spacing);

  ion-input {
    width: 2rem;
    border-bottom: 2px solid var(--primary-color);
    font-size: 30px;
    text-align: center;

    margin: 0 auto;

    --border-style: none;
    --color: var(--primary-color);
    --highlight-color-focused: none;
  }
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: var(--xl-spacing) 0;
}
</style>