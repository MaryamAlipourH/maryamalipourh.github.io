import { Fragment } from "react";
import type { TeachingEntry } from "@/data/teaching";

export function TeachingItem({ role, org, period, courses, description }: TeachingEntry) {
  return (
    <li>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-medium text-fg">
          {role}
          {org && (
            <>
              ,{" "}
              <a className="link" href={org.url}>
                {org.name}
              </a>
            </>
          )}
        </h3>
        <span className="text-sm tabular-nums text-muted">{period}</span>
      </div>

      {courses && (
        <ul className="mt-3 space-y-2 text-sm">
          {courses.map((course) => (
            <li key={course.name} className="text-fg/85">
              {course.name}
              {course.code && (
                <span className="ml-2 rounded bg-subtle px-1.5 py-0.5 text-xs tabular-nums text-muted">
                  {course.code}
                </span>
              )}
              <span className="text-muted">
                {" "}
                · Prof.{" "}
                {course.instructors.map((person, i) => (
                  <Fragment key={person.name}>
                    {i > 0 && " & "}
                    {person.url ? (
                      <a className="link-quiet" href={person.url}>
                        {person.name}
                      </a>
                    ) : (
                      person.name
                    )}
                  </Fragment>
                ))}
              </span>
            </li>
          ))}
        </ul>
      )}

      {description && <p className="mt-3 text-sm text-fg/85">{description}</p>}
    </li>
  );
}
