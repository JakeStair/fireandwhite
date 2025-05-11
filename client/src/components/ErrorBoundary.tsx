import React, { Component, ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>
    }

    return this.props.children
  }
}

export default ErrorBoundary;