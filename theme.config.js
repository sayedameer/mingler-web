const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Mingler by SA.
      <a href="/privacy">Privacy</a>
      <a href="/tos">TOS</a>
      <style jsx>{`
        a {
          float: right;
          padding-left: 1rem;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
