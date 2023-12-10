import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { LanguageMenu } from './LanguageMenu';
import { LanguageContext } from './LanguageContext';

describe("LanguageMenu", () => {
  const setLanguage: jest.Mock = jest.fn();

  it('should be able to set swedish by clicking on button', () => {
    render(
      <LanguageContext.Provider value={{ language: '', setLanguage }}>
        <LanguageMenu />
      </LanguageContext.Provider>
    )
    fireEvent.click(screen.getByText('Swedish'));
    expect(setLanguage).toBeCalledWith("sw");
  })
});
