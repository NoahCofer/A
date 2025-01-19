import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details to the console
        console.error("Error caught by ErrorBoundary:", error, errorInfo);

        // Optionally log errors to a server or analytics tool
        // fetch('/logError', { method: 'POST', body: JSON.stringify({ error, errorInfo }) });
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // Render a fallback UI
            return (
                <div style={{ padding: "20px", color: "red", backgroundColor: "#fff3f3" }}>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
