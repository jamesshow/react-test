import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
  
const queryClient = new QueryClient()
  
const UseQueryApp = () => {
    return (
        <QueryClientProvider client={queryClient}>
        <Example />
        </QueryClientProvider>
    )
}
  
const Example = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
        fetch('https://api.github.com/repos/TanStack/query').then(
            (res) => res.json(),
        ),
    })

    if (isLoading) return <div>'Loading...'</div>

    if (error) return <div>'An error has occurred: ' + error.message</div>

    return (
        <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>{data.subscribers_count}</strong>{' '}
        <strong>{data.stargazers_count}</strong>{' '}
        <strong>{data.forks_count}</strong>
        </div>
    )
}

export default UseQueryApp;

//ref: https://tanstack.com/query/v4/docs/react/quick-start