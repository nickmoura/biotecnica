const PoliticaPrivacidade = () => {
  return (
    <main>
      <div className="lgpd-hero py-5 px-4">
        <h1 className="lgpd-title text-center mb-4">Política de Privacidade</h1>
        <p className="lgpd-subtitle">Nos preocupamos a segurança dos seus dados na internet e nos adequamos à Lei Geral de Proteção de Dados.</p>
      </div>
      <div className="p-5">
        <section>
          <h2 className="h5">1. Introdução</h2>
          <p className="lgpd-text">A proteção dos seus dados pessoais é de extrema importância para nós. Este documento explica como tratamos as informações fornecidas pelos usuários em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
        </section>

        <section>
          <h2 className="h5">2. Dados Coletados</h2>
          <p className="lgpd-text">Ao utilizar nosso formulário de contato, coletamos as seguintes informações:</p>
          <ul>
            <li>Nome</li>
            <li>Sobrenome</li>
            <li>E-mail</li>
            <li>Idade</li>
          </ul>
        </section>

        <section>
          <h2 className="h5">3. Finalidade do Tratamento dos Dados</h2>
          <p className="lgpd-text">Os dados fornecidos serão utilizados exclusivamente para responder às solicitações enviadas pelo formulário. Não utilizamos essas informações para qualquer outro fim, como marketing ou compartilhamento com terceiros.</p>
        </section>

        <section>
          <h2 className="h5">4. Forma de Tratamento dos Dados</h2>
          <p className="lgpd-text">Os dados coletados através do formulário são enviados diretamente para o serviço de terceiros Formspree (<a href="https://formspree.io/" target="_blank" rel="noopener noreferrer">https://formspree.io/</a>), que realiza o disparo do e-mail para nosso endereço de contato. Não armazenamos os dados fornecidos em nossos servidores próprios.</p>
        </section>

        <section>
          <h2 className="h5">5. Compartilhamento de Dados</h2>
          <p className="lgpd-text">Não compartilhamos seus dados pessoais com terceiros, exceto pelo uso do serviço Formspree, que atua como operador para envio de e-mails. Recomendamos que você consulte a política de privacidade do Formspree para mais detalhes sobre como os dados são tratados por eles.</p>
        </section>

        <section>
          <h2 className="h5">6. Base Legal para o Tratamento</h2>
          <p className="lgpd-text">O tratamento dos dados é realizado com base no consentimento do usuário, conforme previsto no Art. 7º, inciso I, da LGPD. O preenchimento e envio do formulário configuram a aceitação desta política de privacidade.</p>
        </section>

        <section>
          <h2 className="h5">7. Direitos dos Titulares de Dados</h2>
          <p className="lgpd-text">Nos termos da LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
          <ul>
            <li>Confirmar a existência de tratamento de dados;</li>
            <li>Acessar os dados fornecidos;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar a exclusão dos dados, salvo quando o armazenamento for permitido por lei.</li>
          </ul>
          <p>Para exercer esses direitos, entre em contato através do nosso e-mail de suporte informado no site.</p>
        </section>

        <section>
          <h2 className="h5">8. Medidas de Segurança</h2>
          <p className="lgpd-text">Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra acessos não autorizados, vazamentos ou outros incidentes. No entanto, ressaltamos que nenhum sistema é completamente seguro, e não podemos garantir absoluta segurança dos dados transmitidos pela internet.</p>
        </section>

        <section>
          <h2 className="h5">9. Alterações nesta Política</h2>
          <p className="lgpd-text">Esta política de privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. Recomendamos que você revise esta página regularmente para se manter informado.</p>
        </section>

        <section>
          <h2 className="h5">10. Contato</h2>
          <p className="lgpd-text">Se você tiver qualquer dúvida sobre esta política de privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato conosco através do e-mail de suporte disponibilizado em nosso site.</p>
        </section>

        <section>
          <h2 className="h5">11. Vigência</h2>
          <p className="lgpd-text">Esta política de privacidade entra em vigor na data de sua publicação no site.</p>
        </section>
      </div>
    </main>
  );
};

export default PoliticaPrivacidade;
