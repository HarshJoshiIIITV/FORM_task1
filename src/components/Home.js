import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'

export const Home = (props) => {
    const { user_data } = props
    useEffect(() => {
        if (!user_data.login) {
            props.history.push("/");
        }
    }, [])
    return (
        user_data.login ? (
            <div>

                <Typography align="center" color="primary" variant="h3"  >
                    Welcome Home
            </Typography>
                <br />
                <br />
                <Typography align="center" color="secondary" variant="h6"  >
                    {user_data.user.firstName}{" "}{user_data.user.lastName}<br />{user_data.user.email}
                </Typography>

            </div>) : <div />
    )
}

const mapStateToProps = (state) => ({
    user_data: state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
