const REMOTE_BASE_URL: string = import.meta.env.VITE_BASE_URL;

const APP_ENV = {
    REMOTE_BASE_URL,
}
console.log("enf", APP_ENV);

export { APP_ENV };