import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import { api } from 'lib/axios'
// import { AxiosError } from 'axios'
import { ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  // async function handleRegister(data: RegisterFormData) {
  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
