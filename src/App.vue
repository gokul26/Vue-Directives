<template>
    <div class="container">
        <form>
            <div class="row" v-if="!isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Sending Custom Directive value -->
                    <h1 v-highlight="'grey'">Sign UP</h1>  
                    <!-- SEnding Cutom Directive Arguments -->
                    <h1 v-highlight:background.delayed="'grey'">Sign UP</h1>  
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- <div class="form-group">
                        <label for="email">First Name</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="userexData.fname"
                            >
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="userexData.lname"
                            >
                    </div> -->
                    
                    <app-Fullname v-model="fullname" :submitted="isSubmitted"></app-Fullname>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="userexData.mail"
                            >
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                class="form-control"
                                v-model.lazy="userexData.password"
                                >
                    </div>
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        Store Data?
                        <label for="male">
                            <input
                                    type="radio"
                                    value="Yes"
                                    v-model="dataStore"> Yes
                        </label>
                        <label for="female">
                            <input
                                    type="radio"
                                    value="No"
                                    v-model="dataStore"> No
                        </label>
                    </div>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted"
                            >Add Info
                    </button>
                </div>
            </div>
            <!-- Exercise 2 -->
            <!-- Only display the Form if it has NOT been submitted -->
            <!-- Display the Data Summary ONCE the Form HAS been submitted -->
            <div class="row" v-else>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Data</h4>
                        </div>
                        <div class="panel-body">
                            <p>Full Name: {{ fullname }}</p>
                            <p>Mail: {{ userexData.mail }}</p>
                            <p>Password: {{ userexData.password }}</p>
                            <p><strong>Store data?</strong> {{dataStore}}</p>
                            <button class="btn btn-sm btn-primary" @click="goBack">Back</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
            </div>
        </form>
    </div>
</template>

<script>

// import Switch from './components/Switch';
import Fullname from './components/Fullname';

    export default {
        data:function(){
            return  {
                userexData:{
                  fname:'',
                  lname:'',
                  mail:'',
                  Password:''
                },
                dataSwitch: true,
                isSubmitted: false,
                dataStore: 'Yes',
                fullname:'Max Green',
            }
        },
        components:{
        //   appSwitch: Switch,
          appFullname: Fullname
        },
        methods:{
          submitted: function(){
            this.isSubmitted=true;
          },
            goBack: function(){
                this.isSubmitted=false;
            }
        }
    }
</script>

<style>

</style>
