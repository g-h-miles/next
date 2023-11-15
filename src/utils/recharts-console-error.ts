// required this function to element this issue: https://github.com/recharts/recharts/issues/3615
export default function hideRechartsConsoleError() {
  const error = console.error;
  return (console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  });
}
