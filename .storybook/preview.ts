import { applicationConfig, Preview } from '@storybook/angular'
import { provideAnimations } from '@angular/platform-browser/animations';
import '../src/assets/styles/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideAnimations()], // ✅ đúng cú pháp Angular 15+ với standalone
    }),
  ],
};

export default preview;