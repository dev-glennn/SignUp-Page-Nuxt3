import { useUserStore } from '~/stores/user';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '~/app.vue';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

export default defineNuxtRouteMiddleware(({ path }) => {
  const { getAuth: auth } = useUserStore();
  const inSignUpPage = path.split('/')[1] === 'signUp';
  // 회원가입 X && 회원가입 페이지 X
  if (!auth && !inSignUpPage) {
    return navigateTo('/signUp/account');
  }
});
