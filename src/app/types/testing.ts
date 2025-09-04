/**
 * @description Interface for testable components
 * Add this interface to all components that you want to test
 * In HTML will be added data-testid attribute with value from testingId property
 */
export interface ITestableProps {
  testingID?: string; // for testing purposes in html is added data-testid attribute
}
