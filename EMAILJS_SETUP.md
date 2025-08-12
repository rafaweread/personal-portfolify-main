# Configuração do EmailJS para Formulário de Contato

## Passos para Configurar:

### 1. Criar conta no EmailJS
- Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
- Crie uma conta gratuita

### 2. Configurar Email Service
- Vá para "Email Services"
- Adicione um novo serviço (Gmail, Outlook, etc.)
- Copie o **Service ID**

### 3. Criar Email Template
- Vá para "Email Templates"
- Crie um novo template com o seguinte conteúdo:

**Assunto:** Nova mensagem de contato do portfólio

**Corpo do e-mail:**
```
Olá Rafael,

Você recebeu uma nova mensagem de contato através do seu portfólio:

Nome: {{from_name}}
E-mail: {{from_email}}
Mensagem: {{message}}

Para responder, clique em "Responder" no seu cliente de e-mail.

Atenciosamente,
Sistema de Contato do Portfólio
```

- Copie o **Template ID**

### 4. Obter Public Key
- Vá para "Account" > "API Keys"
- Copie a **Public Key**

### 5. Atualizar Configuração
- Abra o arquivo `src/config/emailjs.ts`
- Substitua os valores pelos seus IDs reais:

```typescript
export const emailjsConfig = {
  serviceId: 'seu_service_id_aqui',
  templateId: 'seu_template_id_aqui', 
  publicKey: 'sua_public_key_aqui'
};
```

### 6. Testar
- Preencha o formulário de contato
- Envie uma mensagem de teste
- Verifique se o e-mail foi recebido em rafael.penhalemos@gmail.com

## Funcionalidades Implementadas:

✅ Formulário funcional com validação
✅ Envio de e-mails via EmailJS
✅ Feedback visual durante envio
✅ Tratamento de erros
✅ Notificações de sucesso/erro
✅ Estado de carregamento
✅ Limpeza automática do formulário após envio

## Estrutura do E-mail Enviado:

- **De:** Sistema de Contato do Portfólio
- **Para:** rafael.penhalemos@gmail.com
- **Assunto:** Nova mensagem de contato do portfólio
- **Conteúdo:** Nome, e-mail e mensagem do usuário
- **Reply-To:** E-mail do usuário (para facilitar resposta)

## Notas Importantes:

- O plano gratuito do EmailJS permite 200 e-mails por mês
- Para mais volume, considere um plano pago
- As mensagens são enviadas diretamente para seu e-mail
- O sistema inclui validação e tratamento de erros
- O formulário é responsivo e acessível
