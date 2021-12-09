export const mockProvider = (provider: any, mockedProvider: any = {}) => {
  return { provide: provider, useValue: mockedProvider };
};
