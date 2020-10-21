<template>
  <section class="section">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="is-size-2">Movies (200)</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <b-button type="is-primary is-light" @click="toggle"
            >Add Movie</b-button
          >
        </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column">
        <b-table
          :data="[]"
          striped
          hoverable
          mobile-cards
          paginated
          :sort-multiple="false"
          pagination-size="40"
        >
          <b-table-column v-slot="props" label="Added By" width="150">
            {{ props.row.addedBy }}
          </b-table-column>
          <b-table-column v-slot="props" field="name" label="Name" width="500">
            {{ props.row.name }}
          </b-table-column>

          <b-table-column v-slot="props" label="Added On" width="100">
            {{ props.row.addedOn }}
          </b-table-column>

          <b-table-column v-slot="props" label="Rating" width="100">
            {{ props.row.rating }}
          </b-table-column>

          <b-table-column
            v-slot="props"
            field="voters"
            label="Voters"
            width="100"
          >
            <span class="tag is-success">
              {{ props.row.voters }}
            </span>
          </b-table-column>
        </b-table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    toggle() {},
  },
}
</script>
