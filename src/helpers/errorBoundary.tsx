import React from 'react';

interface IErrorBoundary {
  children: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<IErrorBoundary, { hasError: boolean }> {
  constructor(props: IErrorBoundary) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
