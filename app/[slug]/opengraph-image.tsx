import { ImageResponse } from "next/og";
import rolesData from "@/data/roles/roles-data.json";
import { RoleData, getStatusFromScore } from "@/lib/types";

export const runtime = "edge";
export const alt = "AI Automation Risk Assessment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const allRoles = rolesData as Record<string, RoleData>;

function getScoreColor(score: number): string {
  if (score >= 65) return "#ef4444";
  if (score >= 35) return "#e8a838";
  return "#22c55e";
}

function getStatusLabel(status: string): string {
  switch (status) {
    case "critical":
      return "CRITICAL RISK";
    case "elevated":
      return "ELEVATED RISK";
    case "stable":
      return "STABLE";
    default:
      return status.toUpperCase();
  }
}

export default async function OGImage({
  params,
}: {
  params: { slug: string };
}) {
  const role = allRoles[params.slug];
  if (!role) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span style={{ fontSize: 48, color: "#ffffff" }}>
            Role not found
          </span>
        </div>
      ),
      { ...size }
    );
  }

  const color = getScoreColor(role.overallScore);
  const status = getStatusFromScore(role.overallScore);
  const statusLabel = getStatusLabel(status);
  const topTask = role.tasks[0];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#000000",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: "#9ca3af",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            AI Automation Risk Assessment by Claude
          </span>
          <span
            style={{
              fontSize: 16,
              color: "#ffffff",
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            WILLAIREPLACE
            <span style={{ color: "#e8a838" }}>.ME</span>
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* Left side - Score circle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              border: `6px solid ${color}`,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: color,
                fontFamily: "monospace",
                lineHeight: 1,
              }}
            >
              {role.overallScore}%
            </span>
            <span
              style={{
                fontSize: 13,
                color: color,
                fontFamily: "monospace",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginTop: "8px",
              }}
            >
              {statusLabel}
            </span>
          </div>

          {/* Right side - Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <h1
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              {role.title}
            </h1>

            <p
              style={{
                fontSize: 20,
                color: "#9ca3af",
                margin: 0,
                lineHeight: 1.4,
                fontStyle: "italic",
                marginBottom: "24px",
              }}
            >
              {role.tagline}
            </p>

            {topTask && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 16px",
                  backgroundColor: "#1a2332",
                  borderRadius: "8px",
                  border: `1px solid ${color}30`,
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    color: "#9ca3af",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Top threat:
                </span>
                <span
                  style={{
                    fontSize: 16,
                    color: "#ffffff",
                    fontWeight: 600,
                  }}
                >
                  {topTask.task} — {topTask.automation}% automated
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2a3545",
            paddingTop: "20px",
            marginTop: "20px",
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: "#9ca3af",
              fontFamily: "monospace",
            }}
          >
            Check your profession → willaireplace.me
          </span>
          <span
            style={{
              fontSize: 13,
              color: "#9ca3af",
              fontFamily: "monospace",
            }}
          >
            Updated {role.lastUpdated}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
