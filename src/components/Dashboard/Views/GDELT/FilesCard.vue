<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
          <vuetable ref="vuetable"
            api-url="http://127.0.0.1:8104/api/admin/gdelt/v2/file"
            :fields="['ingested', 'size', 'id', 'md5', 'url']"
            @vuetable:pagination-data="onPaginationData"
           ></vuetable>
          <vuetable-pagination ref="pagination"
           @vuetable-pagination:change-page="onChangePage"
          ></vuetable-pagination>
        </div>
      </div>
    </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'

  export default {
    components: {
      Vuetable,
      VuetablePagination
    },
    methods: {

      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      }
    }

  }

</script>
