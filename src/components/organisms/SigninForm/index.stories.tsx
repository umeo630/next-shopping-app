import { ComponentMeta, ComponentStory } from '@storybook/react'
import SigninForm from '.'

export default {
  title: 'Organisms/SignForm',
  argTypes: {
    onSignin: {
      description: 'サインインボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'funtion' },
      },
    },
  },
} as ComponentMeta<typeof SigninForm>

const Template: ComponentStory<typeof SigninForm> = (args) => (
  <SigninForm {...args} />
)

export const Form = Template.bind({})
