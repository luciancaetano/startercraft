function openExternal(url: string): void {
  window.open(url, '_blank');
}

export const NavigationService = {
  openExternal,
};
