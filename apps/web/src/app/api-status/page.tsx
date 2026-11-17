
type DatabaseHealth = {
  status: string;
  database: string;
  application: string;
};

async function getDatabaseHealth(): Promise<{
  success: boolean;
  data?: DatabaseHealth;
  error?: string;
}> {
  const apiBaseUrl = process.env.API_BASE_URL;

  if (!apiBaseUrl) {
    return {
      success: false,
      error: "API_BASE_URL is not configured.",
    };
  }

  try {
    const response = await fetch(
      `${apiBaseUrl}/api/v1/health/database`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return {
        success: false,
        error: `Backend returned HTTP ${response.status}.`,
      };
    }

    const data: DatabaseHealth = await response.json();

    return {
      success: true,
      data,
    };
  } catch {
    return {
      success: false,
      error: "Could not connect to the backend API.",
    };
  }
}

export default async function ApiStatusPage() {
  const result = await getDatabaseHealth();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">
          Global Business Hub
        </h1>

        <p className="mt-2 text-slate-400">
          System connection diagnostics
        </p>

        <div className="mt-10 rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">
            Backend API Connection
          </h2>

          <p className="mt-3">
            {result.success
              ? "Backend connection successful."
              : "Backend connection failed."}
          </p>

          <h2 className="mt-8 text-xl font-semibold">
            Database Connection
          </h2>

          <p className="mt-3">
            {result.success
              ? `Database: ${result.data?.database}`
              : result.error}
          </p>

          {result.success && (
            <div className="mt-6 rounded-lg bg-green-950 p-4 text-green-300">
              <p>Status: {result.data?.status}</p>
              <p>Database: {result.data?.database}</p>
              <p>Application: {result.data?.application}</p>
            </div>
          )}

          {!result.success && (
            <div className="mt-6 rounded-lg bg-red-950 p-4 text-red-300">
              {result.error}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
