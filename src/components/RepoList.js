import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Collapse, Button } from 'react-bootstrap'
import RepoCart from './RepoCart'
import { fetchRepos } from '../actions/repoActions'
import Label from './Label'

export const RepoList = props => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos);

    const isLoading = (repos[props.user.loginId] && repos[props.user.loginId].isLoading) || false;
    const fetched = (repos[props.user.loginId] && repos[props.user.loginId].fetched) || false;
    const userRepos = repos[props.user.loginId] ? repos[props.user.loginId].items : []

    const toggle = () => {
        if (!fetched) {
            const o = { loginId: props.user.loginId, reposUrl: props.user.reposUrl };
            dispatch(fetchRepos(o))
        }
        setOpen(!open)
    }

    return (
        <>
            <Button onClick={() => toggle()} variant='expandable' className={open?'expanded':''} block>{props.user.login}</Button>
            <Label show={isLoading}>Loading...</Label>
            
            <Collapse in={open}>
                
                {/* Bootstrap doesn't want to collapse when no child so wrap it into container to avoid error when user has no repositories */}
                <Container>
                    <Label show={fetched && userRepos.length === 0}>This user has not created any repository yet.</Label>
                    {
                        userRepos.map(repo => { return (<RepoCart repo={repo} />) })
                    }
                </Container>
            </Collapse>
        </>
    )
}

export default RepoList;
