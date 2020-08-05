import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Collapse, Button } from 'react-bootstrap'
import RepoCart from './RepoCart'
import { fetchRepos } from '../actions/repoActions'

export const Loading = props => {
    if (props.isLoading) {
        return (<div>Loading</div>)
    }
    return null
}

export const NoItems = props => {
    if (props.show)
        return (<div>No items</div>)
    return null
}
export const RepoList = props => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos);

    const isLoading = (repos.repos[props.user.loginId] && repos.repos[props.user.loginId].isLoading) || false;
    const fetched = (repos.repos[props.user.loginId] && repos.repos[props.user.loginId].fetched) || false;
    const userRepos = repos.repos[props.user.loginId] ? repos.repos[props.user.loginId].items : []

    const toggle = () => {
        if (!fetched) {
            const o = { loginId: props.user.loginId, reposUrl: props.user.reposUrl };
            dispatch(fetchRepos(o))
            // setFetched(true)
        }
        setOpen(!open)
    }

    return (
        <>
            <Button onClick={() => toggle()} variant='secondary' block>{props.user.login}</Button>
            <Loading isLoading={isLoading} />
            
            
            <Collapse in={open}>
                
                {/* Bootstrap doesn't want to collapse when no child so wrap it into container to avoid error when user has no repositories */}
                <Container>
                    <NoItems show={fetched && userRepos.length === 0}/>
                    {
                        userRepos.map(repo => { return (<RepoCart repo={repo} />) })
                    }
                </Container>
            </Collapse>
        </>
    )
}

export default RepoList;
