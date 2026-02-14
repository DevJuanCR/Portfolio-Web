function ProjectSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-6 animate-pulse">

      {/* titulo y link */}
      <div className="flex items-start justify-between mb-3">
        <div className="h-5 w-40 bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-4 w-4 bg-slate-200 dark:bg-slate-700 rounded" />
      </div>

      {/* descripcion: dos lineas */}
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-700 rounded" />
      </div>

      {/* estrellas y forks */}
      <div className="flex gap-4 mb-4">
        <div className="h-3 w-12 bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-3 w-12 bg-slate-200 dark:bg-slate-700 rounded" />
      </div>

      {/* barra de lenguajes */}
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full mb-2" />

      {/* leyenda de lenguajes */}
      <div className="flex gap-3">
        <div className="h-3 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-3 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-3 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
      </div>

    </div>
  )
}

export default ProjectSkeleton