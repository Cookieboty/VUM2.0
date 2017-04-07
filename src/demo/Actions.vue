<template>
  <div class="page">
    <simple-header title="Actions" :back-link="true"></simple-header>
    <Contented>
      <div class='demos-content-padded'>
        <p><m-button @click.native="showActions()">Show Actions</m-button></p>
      </div>
    </Contented>
    <actions v-model="show" :show-cancel-button="true">
      <action-group>
        <action-button @click.native="publish()">Publish</action-button>
        <action-button @click.native="save()">Save</action-button>
        <action-button class="color-danger" @click.native="save()">Delete</action-button>
      </action-group>
    </actions>
  </div>
</template>

<script>
import Contented from '../components/content'
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import { Actions, ActionButton, ActionGroup } from '../components/actions'

export default {
  components: {
    Contented,
    SimpleHeader,
    'm-button': Button,
    'actions': Actions,
    'action-button': ActionButton,
    'action-group': ActionGroup
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showActions () {
      this.show = true
    },
    publish () {
      console.log('publish')
    },
    save () {
      this.show = false
    },
    delete () {
      this.show = false
    }
  }
}
</script>
