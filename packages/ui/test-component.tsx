"use client";
import * as React from "react";
import { useTranslation } from "next-i18next";

export function TestComponent(): JSX.Element {
  const { t } = useTranslation("footer");

  return <h2>{t("test")}</h2>;
}
