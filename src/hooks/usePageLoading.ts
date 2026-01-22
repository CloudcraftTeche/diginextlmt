"use client";
import { useEffect } from "react";
import { useLoading } from "@/contexts/LoadingContext";

export const usePageLoading = (loading: boolean, message?: string) => {
  const { setPageLoading } = useLoading();

  useEffect(() => {
    setPageLoading(loading, message);
  }, [loading, message, setPageLoading]);
};
