import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SchessButtonComponent } from './schess-button.component';

const meta: Meta<SchessButtonComponent> = {
  title: 'Shared/Button',
  component: SchessButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NzButtonModule, SchessButtonComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<SchessButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Submit',
    type: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    type: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Saving...',
    loading: true,
    type: 'primary',
  },
};
