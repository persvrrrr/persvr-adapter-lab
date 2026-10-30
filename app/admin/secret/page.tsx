export default function SecretPage() {
  return (
    <div>
      <h1>SECRET PAGE</h1>
      <p>FLAG: PERSVR-SECRET-TRAILING-8853</p>
      <pre>{JSON.stringify({
        dbHost: 'prod-db.internal.company.com:5432',
        apiKey: 'sk_live_persvr_demo_trailing_slash',
        awsKey: 'AKIAIOSFODNN7EXAMPLE',
      }, null, 2)}</pre>
    </div>
  )
}
